import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { DELETE, GET, POST } from '../../../backend'
import DataTable, { Action, Cell, Data, SortDirection } from './DataTable'

export interface Urls<T> {
    loadData: string
    deleteData?: (data: T) => string
    createRoute?: string
    copyData?: (data: T) => string
    editRoute?: (data: T) => string
}

interface ComponentProps<T> {
    urls: Urls<T>
    title: string
    cells: Cell<T>[]
    defaultSortBy?: keyof T
    defaultSortDirection?: SortDirection
    actions?: Action<T>[]
    maxWidth?: string | number
    name: String
}

export default function <T>({ urls, title, cells, defaultSortBy, defaultSortDirection, actions, maxWidth, name }: ComponentProps<T>) {

    const history = useHistory()
    const [key, setKey] = useState('initial') // used to refresh page

    const data: Data<T> = {
        get: (options, callback) =>
            GET(urls.loadData
                + `?page=${options.page}`
                + `&pageSize=${options.pageSize}`
                + `&filter=${options.filter}`
                + `&filterBy=${options.filters.join(',')}`
                + `&sortBy=${options.sortBy || ''}`
                + `&sortDirection=${options.sortDirection}`
                , callback),
        delete: (element: T) => {
            const feedback: boolean = confirm(`Wollen Sie den ${name} wirklich löschen?`)
            if (feedback) {
                if (!urls.deleteData)
                    return
                DELETE(urls.deleteData(element)).then(() => setKey('table-' + Math.random()))
            }
        },
        copy: urls.copyData ? (element: T) => {
            POST(urls.copyData(element)).then(() => setKey('table-' + Math.random()))
        } : null,
        create: () => urls.createRoute ? history.push(urls.createRoute) : null,
        edit: (element: T) => urls.editRoute ? history.push(urls.editRoute(element)) : null
    }
    return <DataTable key={key} data={data} title={title} cells={cells} defaultSortBy={defaultSortBy} defaultSortDirection={defaultSortDirection} actions={actions} maxWidth={maxWidth} />

}
