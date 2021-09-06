package orakuma.demo.utils.search;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import orakuma.demo.utils.Beans;

public class SearchResult<T> {

	public final List<T> data;
	public final ResultInfo resultInfo;

	private SearchResult(List<T> data, int page, int pageSize, int totalCount, String sortBy,
			SortDirection direction, String filter, String[] filterBy) {
		this.data = data;
		this.resultInfo = new ResultInfo(page, pageSize, data.size(), totalCount, sortBy, direction, filter, filterBy);
	}

	public static <T> SearchResult<T> create(List<T> all, int page, int pageSize, String sortBy,
			SortDirection sortDirection, String filter, String filterBy) {
		String[] fields = filterBy != null ? filterBy.split(",") : new String[0];
		List<T> filtered = filter(all, filter, fields);
		if (sortBy != null && !sortBy.isEmpty()) {
			filtered.sort(new FieldComparator<T>(sortBy, sortDirection));
		}
		List<T> data = page == 0 ? filtered : new ArrayList<>(filtered);
		if (page > 0) {
			int from = (page - 1) * pageSize;
			int to = page * pageSize;
			if (to > filtered.size()) {
				to = filtered.size();
			}
			data = data.subList(from, to);
		}
		return new SearchResult<>(data, page, pageSize, filtered.size(), sortBy, sortDirection, filter, fields);
	}

	private static <T> List<T> filter(List<T> all, String filter, String[] fields) {
		if (filter == null || filter.isEmpty() || fields.length == 0)
			return all;
		List<T> filtered = new ArrayList<>();
		elementLoop: for (T element : all) {
			for (String field : fields) {
				String value = getValue(element, field);
				if (value.toLowerCase().contains(filter.toLowerCase())) {
					filtered.add(element);
					continue elementLoop;
				}
			}
		}
		return filtered;
	}

	private static <T> String getValue(T element, String field) {
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
