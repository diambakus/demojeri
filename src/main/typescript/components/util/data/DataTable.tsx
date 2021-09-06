import { Button, IconButton, InputBase, Link, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Tooltip, useTheme } from '@material-ui/core'
import { ArrowDropDown as DownIcon, ArrowDropUp as UpIcon, Delete as DeleteIcon, Edit as EditIcon, FileCopy as CopyIcon, SearchOutlined as SearchIcon } from '@material-ui/icons'
import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import { SearchResult } from '../../../types/SearchResult'
import { getBreakpoint } from '../../../utils'
import Loader from '../../loader/Loader'
import Title from '../Title'
import styles from './DataTable.jss'
import Paging from './Paging'

export interface Cell<T> {
    field?: keyof T
    label: string
    getValue: (value: T) => string
    applyFilter?: boolean
    hidden?: 'sm' | 'xs'
}

export interface DataOptions<T> {
    filter: string
    filters: (keyof T)[]
    sortBy: keyof T
    sortDirection: SortDirection
    page: number
    pageSize: number
}

export interface Data<T> {
    get: (options: DataOptions<T>, callback: (result: SearchResult<T>) => void) => void
    delete?: (element: T) => void
    copy?: (element: T) => void
    create?: () => void
    edit?: (element: T) => void
}

export interface Action<T> {
    label: string
    icon: JSX.Element
    run: (value: T) => void
}

export interface ComponentProps<T> {
    data: Data<T>
    title: string
    cells: Cell<T>[]
    defaultSortBy?: keyof T
    defaultSortDirection?: SortDirection
    actions?: Action<T>[]
    maxWidth?: string | number
}

export type SortDirection = 'ASCENDING' | 'DESCENDING'
export default function <T>({ data, title, cells, defaultSortBy, defaultSortDirection, actions, maxWidth }: ComponentProps<T>) {

    const classes = styles({ maxWidth })
    const theme = useTheme()
    const hasActions = (actions && actions.length) || data.delete || data.edit
    const filters = cells.filter(cell => cell.applyFilter).map(cell => cell.field)
    const sortFields = cells.filter(cell => cell.field).map(cell => cell.field)
    let initialSortBy = undefined
    if (sortFields.length)
        initialSortBy = sortFields[0]
    if (defaultSortBy && sortFields.find(field => field === defaultSortBy))
        initialSortBy = defaultSortBy
    const [loading, setLoading] = useState(true)
    const [elements, setElements] = useState<T[]>([])
    const [filter, setFilter] = useState('')
    const [sortBy, setSortBy] = useState<keyof T>(initialSortBy)
    const [sortDirection, setSortDirection] = useState<SortDirection>(defaultSortDirection || 'ASCENDING')
    const [maxPages, setMaxPages] = useState(9)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [pageCount, setPageCount] = useState(1)
    const [totalCount, setTotalCount] = useState(0)

    const onResize = () => {
        const breakpoint = getBreakpoint(theme)
        switch (breakpoint) {
            case 'xl':
            case 'lg':
                setMaxPages(9)
                break
            case 'md':
                setMaxPages(7)
                break
            case 'sm':
                setMaxPages(3)
                break
            case 'xs':
                setMaxPages(1)
                break
        }
    }

    useEffect(() => {
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        let canceled = false
        data.get({ filter, filters, sortBy, sortDirection, page, pageSize }, (result: SearchResult<T>) => {
            if (canceled || !result) {
                setLoading(false)
                return
            }
            setElements(result.data)
            setPageCount(result.resultInfo.pageCount)
            setTotalCount(result.resultInfo.totalCount)
            setLoading(false)
        })
        return () => canceled = true
    }, [filter, page, pageSize, sortBy, sortDirection])

    const getHideOnBreakpointClass = (cell: Cell<T>) => {
        if (cell.hidden === 'xs')
            return classes.hiddenXs
        if (cell.hidden === 'sm')
            return classes.hiddenSm
        return null
    }

    const renderActionCell = (title, icon, action) =>
        <Tooltip key={title} title={title}>
            <IconButton size='small' onClick={action}>
                {icon}
            </IconButton>
        </Tooltip>

    const renderActions = (value: T) => {
        if (!hasActions)
            return
        const markup = []
        if (actions)
            actions.forEach(action => markup.push(renderActionCell(action.label, action.icon, () => action.run(value))))
        if (data.edit)
            markup.push(renderActionCell('Bearbeiten', <EditIcon/>, () => data.edit(value)))
        if (data.copy)
            markup.push(renderActionCell('Kopieren', <CopyIcon/>, () => data.copy(value)))
        if (data.delete)
            markup.push(renderActionCell('Löschen', <DeleteIcon/>, () => data.delete(value)))
        return <TableCell className={classes.tableRow}>{markup}</TableCell>
    }

    const renderTableContent = () => {
        if (!elements || !elements.length)
            return <TableRow key={-1}><TableCell><em>Keine Daten vorhanden</em></TableCell></TableRow>
        return elements.map((row, index) =>
            <TableRow key={index}>
                {cells.map((cell, index) => {
                    const value = cell.getValue(row)
                    return <TableCell key={index} className={classnames(classes.tableRow, getHideOnBreakpointClass(cell))}>{value}</TableCell>
                })}
                {renderActions(row)}
            </TableRow>
        )
    }

    const setSorting = (event, cell) => {
        event.preventDefault()
        if (cell.field === sortBy)
            setSortDirection(sortDirection === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING')
        else
            setSortBy(cell.field)
    }

    return <div className={classes.container}>
        {loading ? <Loader/> : null}
        <div className={classes.header}>
            <Title lines className={classes.title}>{title}</Title>
            {data.create ?
                <Button variant='contained' color='primary' className={classes.createButton} onClick={() => data.create()}>
                    <span className={classes.buttonTextMd}>Neu erstellen</span>
                    <span className={classes.buttonTextXs}>+</span>
                </Button>
            : null}
            {filters && filters.length ?
                <Paper className={classes.searchBox}>
                    <InputBase autoFocus fullWidth placeholder='Filtern...' inputProps={{ 'aria-label': 'search ' }} value={filter} onChange={event => {
                        setPage(1)
                        setFilter(event.target.value)
                    }}/>
                    <SearchIcon/>
                </Paper>
            : null}
        </div>
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label='sticky table' size='small'>
                <TableHead>
                    <TableRow>
                        {cells.map((cell, index) =>
                            <TableCell key={index} className={classnames(classes.tableHeader, getHideOnBreakpointClass(cell))}>
                                {cell.field
                                    ? <Link color='inherit' href='#' onClick={event => setSorting(event, cell)}>
                                            {cell.label}
                                            {cell.field === sortBy
                                                ? sortDirection === 'ASCENDING'
                                                    ? <UpIcon className={classes.sortIcon}/>
                                                    : <DownIcon className={classes.sortIcon}/>
                                                : null}
                                        </Link>
                                    : cell.label
                                }
                            </TableCell>
                        )}
                        {hasActions ? <TableCell className={classes.tableHeader}/> : null}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTableContent()}
                </TableBody>
                {totalCount > 10 ?
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={cells.length + 1} className={classes.footerCell}>
                                <Paging maxPages={maxPages} page={page} pageSize={pageSize} pageCount={pageCount}
                                    setPage={p => {
                                        if (page === p)
                                            return
                                        setLoading(true)
                                        setPage(p)
                                    }}
                                    setPageSize={s => {
                                        if (pageSize === s)
                                            return
                                        setLoading(true)
                                        setPageSize(s)
                                    }}/>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                : null}
            </Table>
        </TableContainer>
    </div>

}
