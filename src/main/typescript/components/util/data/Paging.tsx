import { Button, ButtonGroup, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import styles from './Paging.jss'

interface ComponentProps {
    maxPages: number
    page: number
    pageSize: number
    pageCount: number
    setPage: (page: number) => void
    setPageSize: (size: number) => void
}

interface Page {
    no: number
    label: string | number
}

export default ({ maxPages, page, pageSize, pageCount, setPage, setPageSize }: ComponentProps) => {

    const classes = styles({})

    const renderLink = (p: Page) =>
        <Button color='primary' size='small' variant={p.no === page && p.label === p.no ? 'contained' : 'outlined'} disabled={p.no < 1 || p.no > pageCount || p.no === page && p.label !== p.no} key={p.label} onClick={e => {
            e.preventDefault()
            setPage(p.no)
        }}>{p.label}</Button>

    const side = (maxPages - 1) / 2
    const startPage = page - side > 1 ? page - side : 1
    const endPage = Math.min(pageCount, page + side > maxPages ? page + side : maxPages)
    const pages: Page[] = []
    pages.push({ no: 1, label: '<<' })
    pages.push({ no: page - 1, label: '<' })
    for (let i = startPage; i <= endPage; i++)
        pages.push({ no: i, label: i })
    pages.push({ no: page + 1, label: '>' })
    pages.push({ no: pageCount, label: '>>' })
    return <span>
        <ButtonGroup>
            {pages.map(p => renderLink(p))}
        </ButtonGroup>
        <Select value={pageSize} onChange={e => setPageSize(parseInt(e.target.value.toString(), undefined))} className={classes.pageSizeSelect}>
            {[1, 5, 10, 25, 50, 100].map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </Select>
        per page
    </span>
}
