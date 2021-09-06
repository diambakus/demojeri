import { useTheme } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import classnames from 'classnames'
import React, { ReactNode, useEffect, useState } from 'react'
import { getBreakpoint } from '../../utils'
import styles from './Grid.jss'

const GAP = 25

interface Breakpoints {
    xs?: number | string
    sm?: number | string
    md?: number | string
    lg?: number | string
    xl?: number | string
}

interface ComponentProps {
    columns?: number | string | Breakpoints
    rows?: number | string | Breakpoints
    children?: ReactNode
    className?: string
}

const getLargest = (b: Breakpoints, stop: Breakpoint) => {
    stop = stop || 'xl'
    switch (stop) {
        case 'xs': return b.xs || 1
        case 'sm': return b.sm || b.xs || 1
        case 'md': return b.md || b.sm || b.xs || 1
        case 'lg': return b.lg || b.md || b.sm || b.xs || 1
        case 'xl': return b.xl || b.lg || b.md || b.sm || b.xs || 1
    }
}

const getTemplate = (value) => {
    if (!value || typeof value === 'string')
        return value
    let gridTemplateColumns = ''
    const cols = value > 0 ? Math.floor(value) : 1
    for (let i = 0; i < cols; i++)
        gridTemplateColumns += `calc(100% / ${cols} - ${GAP * (cols - 1) / cols}px) `
    return gridTemplateColumns
}

const isBreakpoints = (value: any): value is Breakpoints => {
    if (!value)
        return false
    if (typeof value === 'string')
        return false
    if (typeof value === 'number')
        return false
    return true
}

export default ({ columns, rows, children, className }: ComponentProps) => {

    const classes = styles({ gap: GAP })
    const theme = useTheme()
    const [breakpoint, setBreakpoint] = useState(getBreakpoint(theme))

    useEffect(() => {
        if (!isBreakpoints(columns) && !isBreakpoints(rows))
            return
        const listenerFunction = () => setBreakpoint(getBreakpoint(theme))
        window.addEventListener('resize', listenerFunction)
        return () => window.removeEventListener('resize', listenerFunction)
    }, [])

    const getStyle = (breakpoint?: Breakpoint) => {
        return {
            gridTemplateColumns: getTemplate(
                !breakpoint
                    ? columns
                    : isBreakpoints(columns)
                        ? getLargest(columns, breakpoint)
                        : columns),
            gridTemplateRows: getTemplate(
                !breakpoint
                    ? rows
                    : isBreakpoints(rows)
                        ? getLargest(rows, breakpoint)
                        : rows)
        }
    }

    const renderGrid = (breakpoint?: Breakpoint) =>
        <div className={classnames(classes.grid, className)} style={getStyle(breakpoint)}>
            {children}
        </div>

    if (!isBreakpoints(columns) && !isBreakpoints(rows))
        return renderGrid()
    return renderGrid(breakpoint)

}
