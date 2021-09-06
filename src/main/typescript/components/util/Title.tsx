import classnames from 'classnames'
import React from 'react'
import styles from './Title.jss'

interface ComponentProps {
    centered?: boolean
    grow?: boolean
    bold?: boolean
    small?: boolean
    caption?: boolean
    lines?: boolean
    color?: string
    className?: string
    children: any
}
export default ({ centered, grow, bold, small, caption, lines, color, className, children }: ComponentProps) => {

    const classes = styles({ centered, bold, small, caption, lines, color })

    return <div className={classnames(className, grow && classes.grow)}>
        <div className={classes.container}>
            {lines ? <div className={classes.hrLeft}/> : null}
            <div className={classes.content}>{children}</div>
            {lines ? <div className={classes.hrRight}/> : null}
        </div>
    </div>

}
