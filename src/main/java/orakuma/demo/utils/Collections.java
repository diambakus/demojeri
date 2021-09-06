package orakuma.demo.utils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

public class Collections {

	public static <V extends Comparable<V>> void sort(List<V> list) {
		java.util.Collections.sort(list);
	}

	public static <V> void sort(List<V> list, Comparator<V> comparator) {
		java.util.Collections.sort(list, comparator);
	}

	public static <V> V find(List<V> list, Function<V, Boolean> is) {
		if (list == null || is == null)
			return null;
		for (V v : list)
			if (is.apply(v))
				return v;
		return null;
	}

	public static <K1, K2, V> V get(Map<K1, Map<K2, V>> map, K1 key1, K2 key2) {
		Map<K2, V> inner = map.get(key1);
		if (inner == null)
			return null;
		return inner.get(key2);
	}

	public static <K1, K2, V> void put(Map<K1, Map<K2, V>> map, K1 key1, K2 key2, V value) {
		Map<K2, V> inner = map.get(key1);
		if (inner == null) {
			map.put(key1, inner = new HashMap<>());
		}
		inner.put(key2, value);
	}

	public static <T, V> void put(Collection<T> to, Collection<V> from, Function<V, T> map) {
		for (V v : from) {
			to.add(map.apply(v));
		}
	}

	public static <K, V> Set<V> addToSet(Map<K, Set<V>> map, K key, V setValue) {
		Set<V> set = map.get(key);
		if (set == null) {
			set = new HashSet<>();
			map.put(key, set);
		}
		set.add(setValue);
		return set;
	}

	public static <K, V> List<V> addToList(Map<K, List<V>> map, K key, V setValue) {
		List<V> list = map.get(key);
		if (list == null) {
			list = new ArrayList<>();
			map.put(key, list);
		}
		list.add(setValue);
		return list;
	}

	public static <K, V> K remove(Map<K, ? extends Collection<V>> map, V value) {
		K match = null;
		for (K key : new ArrayList<>(map.keySet())) {
			Collection<V> col = map.get(key);
			if (!col.contains(value))
				continue;
			col.remove(value);
			if (!col.isEmpty())
				continue;
			match = key;
		}
		return match;
	}

	public static <K, V, S> K remove(Map<K, ? extends Collection<V>> map, S value, Function<V, S> converter) {
		K match = null;
		for (K key : new ArrayList<>(map.keySet())) {
			Collection<V> col = map.get(key);
			for (V val : new ArrayList<>(col)) {
				if (converter.apply(val).equals(value)) {
					col.remove(val);
				}
			}
			if (!col.isEmpty())
				continue;
			match = key;
		}
		return match;
	}

	public static <V> List<V> parseList(String values, Function<String, V> parse) {
		return parseList(values, ',', parse);
	}

	public static <V> List<V> parseList(String values, char splitChar, Function<String, V> parse) {
		List<V> list = new ArrayList<>();
		parseInto(list, values, splitChar, parse);
		return list;
	}

	public static <V> Set<V> parseSet(String values, Function<String, V> parse) {
		return parseSet(values, ',', parse);
	}

	public static <V> Set<V> parseSet(String values, char splitChar, Function<String, V> parse) {
		Set<V> set = new HashSet<>();
		parseInto(set, values, splitChar, parse);
		return set;
	}

	private static <C extends Collection<V>, V> void parseInto(C col, String values, char splitChar,
			Function<String, V> parse) {
		if (values == null)
			return;
		String[] split = values.split(Character.toString(splitChar));
		for (String value : split) {
			V parsed = parse.apply(value);
			col.add(parsed);
		}
	}

	public static <T> List<Map<String, Object>> map(List<T> list, Function<T, Map<String, Object>> function) {
		return convertToList(list, function);
	}

	public static <V, T> List<T> convertToList(Collection<V> col, Function<V, T> converter) {
		return (List<T>) convert(col, new ArrayList<>(), converter);
	}

	public static <V, T> Set<T> convertToSet(Collection<V> col, Function<V, T> converter) {
		return (Set<T>) convert(col, new HashSet<>(), converter);
	}

	private static <V, T> Collection<T> convert(Collection<V> from, Collection<T> to, Function<V, T> converter) {
		for (V elem : from) {
			to.add(converter.apply(elem));
		}
		return to;
	}

	public static <T, K, V> Map<K, V> map(Collection<T> col, Function<T, K> keyGenerator, Function<T, V> valueMapper) {
		Map<K, V> map = new HashMap<>();
		for (T elem : col) {
			map.put(keyGenerator.apply(elem), valueMapper.apply(elem));
		}
		return map;
	}

	public static <V> String stringify(Collection<V> col) {
		return stringify(col, ',');
	}

	public static <V> String stringify(Collection<V> col, char splitChar) {
		StringBuilder value = new StringBuilder();
		for (V entry : col) {
			if (value.length() != 0) {
				value.append(splitChar);
			}
			value.append(entry.toString());
		}
		return value.toString();
	}

	public static <V> List<V> filter(List<V> list, Function<V, Boolean> filter) {
		return filter(list, new ArrayList<>(), filter);
	}

	public static <V> Set<V> filter(Set<V> set, Function<V, Boolean> filter) {
		return filter(set, new HashSet<>(), filter);
	}

	private static <C extends Collection<V>, V> C filter(C col, C filtered, Function<V, Boolean> filter) {
		for (V value : col) {
			if (filter.apply(value))
				continue;
			filtered.add(value);
		}
		return filtered;
	}

	public static <V> List<V> filterDuplicates(List<V> values) {
		return new ArrayList<>(new HashSet<>(values));
	}

	public static <V, I> List<V> filterDuplicates(List<V> values, Function<V, I> getId) {
		Set<I> existing = new HashSet<>();
		return Collections.filter(values, e -> {
			I id = getId.apply(e);
			if (existing.contains(id))
				return true;
			existing.add(id);
			return false;
		});
	}

	public static <T> List<T> pop(List<T> col, int amount) {
		List<T> sublist = new ArrayList<>();
		while (sublist.size() < amount && !col.isEmpty()) {
			sublist.add(col.remove(0));
		}
		return sublist;
	}

	public static <T> Set<T> pop(Set<T> col, int amount) {
		Set<T> sublist = new HashSet<>();
		Iterator<T> it = col.iterator();
		while (sublist.size() < amount && it.hasNext()) {
			sublist.add(it.next());
		}
		col.removeAll(sublist);
		return sublist;
	}

	public static String join(Collection<String> values) {
		return join(values, "");
	}

	public static String join(Collection<String> values, String delimiter) {
		String joined = "";
		for (String v : values) {
			joined += v + delimiter;
		}
		return joined;
	}

}
