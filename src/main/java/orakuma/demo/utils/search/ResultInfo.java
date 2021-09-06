package orakuma.demo.utils.search;

class ResultInfo {

	public final int page;
	public final int pageSize;
	public final int pageCount;
	public final int count;
	public final int totalCount;
	public final String sortBy;
	public final SortDirection sortDirection;
	public final String filter;
	public final String[] filterBy;

	ResultInfo(int page, int pageSize, int count, int totalCount, String sortBy, SortDirection sortDirection,
			String filter, String[] filterBy) {
		this.page = page;
		this.pageSize = pageSize;
		this.pageCount = (int) Math.ceil(totalCount / (double) pageSize);
		this.count = count;
		this.totalCount = totalCount;
		this.sortBy = sortBy;
		this.sortDirection = sortDirection;
		this.filter = filter;
		this.filterBy = filterBy;
	}

}
