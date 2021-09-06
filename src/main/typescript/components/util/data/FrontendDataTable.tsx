import React from 'react'
import DataTable, { Action, Cell, Data, SortDirection } from './DataTable'

export interface FrontendData<T> {
    elements: T[]
    delete?: (element: T) => void
    create?: () => void
    edit?: (element: T) => void
}

export interface ComponentProps<T> {
    data: FrontendData<T>
    title: string
    cells: Cell<T>[]
    defaultSortBy?: keyof T
    defaultSortDirection?: SortDirection
    actions?: Action<T>[]
    maxWidth?: string | number
}

export default function <T>({ data, title, cells, defaultSortBy, defaultSortDirection, actions, maxWidth }: ComponentProps<T>) {

    const filtered: Data<T> = {
        get: (options, callback) => {
            let filtered = data.elements || []
            if (options.filters.length && options.filter)
                filtered = filtered.filter(element => {
                    for (let field of options.filters)
                        if (element[field] && (element[field] as any as string).indexOf(options.filter) !== -1)
                            return true
                    return false
                })
            if (options.sortBy)
                filtered.sort((a: T, b: T) => {
                    let result = 0
                    if (a[options.sortBy] < b[options.sortBy])
                        result = -1
                    else if (a[options.sortBy] > b[options.sortBy])
                        result = 1
                    return result * (options.sortDirection === 'ASCENDING' ? 1 : -1)
                })
            const paged = []
            for (let i = (options.page - 1) * options.pageSize; i < Math.min(filtered.length, options.page * options.pageSize); i++)
                paged.push(filtered[i])
            callback({
                data: paged,
                resultInfo: {
                    page: options.page,
                    pageSize: options.pageSize,
                    filter: options.filter,
                    filterBy: options.filters as string[],
                    sortBy: options.sortBy as string,
                    pageCount: filtered.length / options.pageSize,
                    count: paged.length,
                    totalCount: filtered.length
                }
            })
        },
        delete: data.delete,
        create: data.create,
        edit: data.edit
    }
    return <DataTable data={filtered} title={title} cells={cells} defaultSortBy={defaultSortBy} defaultSortDirection={defaultSortDirection} actions={actions} maxWidth={maxWidth} />

}
