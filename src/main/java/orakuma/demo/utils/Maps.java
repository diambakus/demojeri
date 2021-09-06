package orakuma.demo.utils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Maps {

	private static final ObjectMapper mapper = new ObjectMapper();
	
	private Maps() {
	}

	public static <K, V> Map<K, V> from(K key, V value) {
		return Collections.singletonMap(key, value);
	}

	public static <K, V> Map<K, V> from(K key1, V value1, K key2, V value2, K key3, V value3) {
		Map<K, V> map = new HashMap<>();
		map.put(key1, value1);
		map.put(key2, value2);
		map.put(key3, value3);
		return map;
	}

	public static <K, V> Map<K, V> from(K key1, V value1, K key2, V value2) {
		Map<K, V> map = new HashMap<>();
		map.put(key1, value1);
		map.put(key2, value2);
		return map;
	}

	public static Map<String, String> from(String... keyValues) {
		if (keyValues.length % 2 != 0)
			throw new IllegalArgumentException("Must provide even numbers of values");
		Map<String, String> map = new HashMap<>();
		for (int i = 0; i < keyValues.length - 1; i++) {
			map.put(keyValues[i], keyValues[i + 1]);
		}
		return map;
	}

	public static Map<String, Object> from(Object object) {
		if (object == null)
			return null;
		return mapper.convertValue(object, new TypeReference<Map<String, Object>>() {
		});
	}
	
	public static Map<String, Object> partial(Object object, String... fields) {
		if (object == null)
			return null;
		Map<String, Object> map = from(object);
		Maps.removeAllBut(map, fields);
		return map;
	}

	public static Map<String, Object> parse(String json) {
		if (json == null)
			return null;
		try {
			return mapper.readValue(json, new TypeReference<Map<String, Object>>() {
			});
		} catch (JsonProcessingException e) {
			return null;
		}
	}

	public static void removeAllBut(Map<String, Object> map, String... fields) {
		if (fields == null)
			return;
		Set<String> fieldSet = new HashSet<>();
		for (String field : fields) {
			if (field.contains(".")) {
				throw new IllegalArgumentException("removeAllBut doesn't support complex fields");
			} else {
				fieldSet.add(field);
			}
		}
		for (String key : new HashSet<>(map.keySet())) {
			if (!fieldSet.contains(key)) {
				remove(map, key);
			}
		}
	}

	public static void remove(Map<String, Object> map, String... fields) {
		if (fields == null)
			return;
		for (String field : fields) {
			remove(map, field);
		}
	}

	public static Object remove(Map<String, Object> map, String field) {
		if (map == null)
			return null;
		if (!field.contains("."))
			return map.remove(field);
		String prefix = field.substring(0, field.lastIndexOf('.'));
		field = field.substring(field.lastIndexOf('.') + 1);
		Collection<Object> allNext = getAll(map, prefix);
		List<Object> previous = new ArrayList<>();
		for (Object next : allNext) {
			if (next instanceof Map) {
				previous.add(((Map<?, ?>) next).remove(field));
			}
		}
		return previous;
	}

	public static Object put(Map<String, Object> map, String field, Object value) {
		if (field.contains(".")) {
			String prefix = field.substring(0, field.lastIndexOf('.'));
			field = field.substring(field.lastIndexOf('.') + 1);
			map = get(map, prefix, true, true);
		}
		return map.put(field, value);
	}

	public static Object putRef(Map<String, Object> map, String field, Object value) {
		if (value == null)
			return null;
		Map<String, Object> ref = Maps.from(value);
		Maps.removeAllBut(ref, "id", "name");
		return map.put(field, ref);
	}

	public static Object putRefs(Map<String, Object> map, String field, List<? extends Object> values) {
		if (values == null)
			return null;
		List<Map<String, Object>> refs = new ArrayList<>();
		for (Object value : values) {
			Map<String, Object> ref = Maps.from(value);
			Maps.removeAllBut(ref, "id", "name");
			refs.add(ref);
		}
		return map.put(field, refs);
	}

	public static void nullify(Map<String, Object> map, String... fields) {
		if (fields == null)
			return;
		for (String field : fields) {
			put(map, field, null);
		}
	}

	@SuppressWarnings("unchecked")
	public static void removeEmptyOrNull(Map<String, Object> map) {
		for (String key : new HashSet<>(map.keySet())) {
			Object value = map.get(key);
			if (map.get(key) == null) {
				map.remove(key);
			} else if (value instanceof String && ((String) value).isEmpty()) {
				map.remove(key);
			} else if (value instanceof Map) {
				removeEmptyOrNull((Map<String, Object>) value);
			}
		}
	}

	public static <T> T get(Map<String, Object> map, String field) {
		if (field == null)
			return null;
		return get(map, field, false, true);
	}

	@SuppressWarnings("unchecked")
	public static <T> List<T> getAll(Map<String, Object> map, String field, Class<T> clazz) {
		List<T> values = new ArrayList<>();
		Collection<Object> all = getAll(map, field);
		for (Object value : all) {
			if (clazz == Long.class && value instanceof Integer) {
				value = ((Integer) value).longValue();
			}
			values.add((T) value);
		}
		return values;
	}

	@SuppressWarnings("unchecked")
	private static Collection<Object> getAll(Map<String, Object> map, String field) {
		if (!field.contains("."))
			return toArray(map.get(field));
		Collection<Object> all = new ArrayList<>();
		String prefix = field.substring(0, field.lastIndexOf('.'));
		field = field.substring(field.lastIndexOf('.') + 1);
		Collection<Object> allNext = getAll(map, prefix);
		for (Object next : allNext) {
			if (next instanceof Map) {
				all.addAll(getAll((Map<String, Object>) next, field));
			}
		}
		return all;
	}

	// boolean initialCall is to distinguish between recursive call and initial
	// call, createMissing only applies to recursive calls
	@SuppressWarnings("unchecked")
	private static <T> T get(Map<String, Object> map, String field, boolean createMissing, boolean initialCall) {
		if (field.contains(".")) {
			String prefix = field.substring(0, field.lastIndexOf('.'));
			field = field.substring(field.lastIndexOf('.') + 1);
			map = get(map, prefix, createMissing, false);
		}
		Object value = null;
		if (map != null) {
			value = map.get(field);
		}
		if (value == null && createMissing && !initialCall) {
			value = new HashMap<String, Object>();
		}
		return (T) value;
	}

	public static int getArrayLength(Map<String, Object> map, String field) {
		Object array = get(map, field, false, true);
		if (array == null)
			return 0;
		if (array instanceof Collection)
			return ((Collection<?>) array).size();
		return 0;
	}

	public static String getString(Map<String, Object> map, String field) {
		Object value = get(map, field);
		if (value == null)
			return null;
		if (value instanceof String[])
			return ((String[]) value)[0];
		return value.toString();
	}

	public static long getLong(Map<String, Object> map, String field) {
		Object value = get(map, field);
		if (value == null)
			return 0;
		try {
			if (value instanceof String[])
				return Double.valueOf(((String[]) value)[0]).longValue();
			return Double.valueOf(value.toString()).longValue();
		} catch (NumberFormatException e) {
			return 0;
		}
	}

	public static double getDouble(Map<String, Object> map, String field) {
		Object value = get(map, field);
		if (value == null)
			return 0;
		try {
			if (value instanceof String[])
				return Double.parseDouble(((String[]) value)[0]);
			return Double.parseDouble(value.toString());
		} catch (NumberFormatException e) {
			return 0;
		}
	}

	public static int getInteger(Map<String, Object> map, String field) {
		Object value = get(map, field);
		if (value == null)
			return 0;
		try {
			if (value instanceof String[])
				return Integer.parseInt(((String[]) value)[0]);
			return Integer.parseInt(value.toString());
		} catch (NumberFormatException e) {
			return 0;
		}
	}

	public static boolean getBoolean(Map<String, Object> map, String field) {
		Object value = get(map, field);
		if (value == null)
			return false;
		String stringValue = null;
		if (value instanceof String[]) {
			stringValue = ((String[]) value)[0].toLowerCase();
		} else {
			stringValue = value.toString().toLowerCase();
		}
		switch (stringValue) {
		case "true":
			return true;
		case "on":
			return true;
		case "yes":
			return true;
		default:
			return false;
		}
	}

	@SuppressWarnings("unchecked")
	private static Collection<Object> toArray(Object value) {
		if (value == null)
			return Collections.emptyList();
		if (value instanceof Collection)
			return ((Collection<Object>) value);
		return Collections.singletonList(value);
	}

	
	public static void formatDate(Map<String, Object> map, String field) {
		long value = getLong(map, field);
		if (value == 0l)
			return;
		put(map, field, Dates.formatDate(value));
	}
	
}
