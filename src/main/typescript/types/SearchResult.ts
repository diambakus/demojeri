export interface ResultInfo {
    page: number
    pageSize: number
    pageCount: number
    count: number
    totalCount: number
    sortBy: string
    filter: string
    filterBy: string[]
}

export interface SearchResult<T> {
    data: T[]
    resultInfo: ResultInfo
}
