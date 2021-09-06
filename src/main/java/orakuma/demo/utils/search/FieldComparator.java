package orakuma.demo.utils.search;

import java.util.Comparator;
import java.util.Map;

import orakuma.demo.model.Organization;
import orakuma.demo.model.User;
import orakuma.demo.utils.Beans;

class FieldComparator<T> implements Comparator<T> {

	private final String sortBy;
	private final SortDirection sortDirection;

	FieldComparator(String sortBy, SortDirection sortDirection) {
		this.sortBy = sortBy;
		this.sortDirection = sortDirection;
	}

	@Override
	public int compare(T object1, T object2) {
		Object value1 = getValue(object1, sortBy);
		Object value2 = getValue(object2, sortBy);
		if (object1 instanceof User && sortBy.equals("organization"))
			return new FieldComparator<Organization>("name", sortDirection)
					.compare((Organization) value1, (Organization) value2);
		int result = 0;
		/*if (object1 instanceof PCF && sortBy.equals("creationDate")) {
			result = compareDateString(toLowerCase(value1), toLowerCase(value2));
		} else {
			result = toLowerCase(value1).compareTo(toLowerCase(value2));
		}*/
		return sortDirection == SortDirection.ASCENDING ? result : -result;
	}

	private int compareAsInt(String value1, String value2) {
		int n1 = Integer.parseInt(value1);
		int n2 = Integer.parseInt(value2);
		if (n1 > n2)
			return 1;
		if (n1 < n2)
			return -1;
		return 0;
	}

	private int compareDateString(String value1, String value2) {
		String[] d1 = value1.split("\\.");
		String[] d2 = value2.split("\\.");
		int compare = compareAsInt(d1[2], d2[2]);
		if (compare != 0)
			return compare;
		compare = compareAsInt(d1[1], d2[1]);
		if (compare != 0)
			return compare;
		return compareAsInt(d1[0], d2[0]);
	}

	private String toLowerCase(Object value) {
		if (value == null)
			return "";
		return value.toString().toLowerCase();
	}

	private String getValue(T element, String field) {
		Object value = null;
		if (element instanceof Map) {
			value = ((Map<?, ?>) element).get(field);
		} else {
			value = Beans.getFieldValue(element, field);
		}
		if (value == null)
			return "";
		return value.toString();
	}

}