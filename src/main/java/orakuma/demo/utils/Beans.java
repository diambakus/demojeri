package orakuma.demo.utils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Beans {

	private static final Logger logger = LoggerFactory.getLogger(Beans.class);

	public static void populateProperties(Object from, Object to,
			String... fields) {
		if (fields == null)
			return;
		for (String name : fields) {
			Field fromField = getField(from.getClass(), name);
			Field toField = getField(to.getClass(), name);
			if (fromField == null || toField == null)
				continue;
			setFieldValue(from, fromField, to, toField);
		}
	}

	private static Field getField(Class<?> clazz, String name) {
		if (clazz == Object.class)
			return null;
		Field field = null;
		try {
			field = clazz.getDeclaredField(name);
		} catch (Exception e) {
			// ignore exceptions, security is not an issue
			// if field does not exist, move on
		}
		if (field != null)
			return field;
		return getField(clazz.getSuperclass(), name);
	}

	private static void setFieldValue(Object from, Field fromField, Object to,
			Field toField) {
		boolean fromAccessibility = fromField.isAccessible();
		if (!fromAccessibility)
			fromField.setAccessible(true);
		boolean toAccessibility = toField.isAccessible();
		if (!toAccessibility)
			toField.setAccessible(true);
		try {
			Object value = fromField.get(from);
			if (value instanceof List)
				value = new ArrayList<>((List<?>) value);
			else if (value instanceof Set)
				value = new HashSet<>((Set<?>) value);
			toField.set(to, value);
		} catch (Exception e) {
			logger.error("Error setting field value", e);
		} finally {
			fromField.setAccessible(fromAccessibility);
			toField.setAccessible(toAccessibility);
		}
	}
	
	@SuppressWarnings("unchecked")
	public static <T> T getFieldValue(Object object, String fieldName) {
		if (object == null)
			return null;
		try {
			Field field = object.getClass().getDeclaredField(fieldName);
			boolean isAccessible = field.isAccessible();
			if (!isAccessible) {
				field.setAccessible(true);
			}
			if (!isAccessible) {
				field.setAccessible(false);
			}
			return (T) field.get(object);
		} catch (Exception e) {
			return null;
		}
	}	
}
