import React, { ReactNode } from 'react'
import styles from './Align.jss'

interface ComponentProps {
    position: 'start' | 'center' | 'end'
    children?: ReactNode
}

export default ({ position, children }: ComponentProps) => {

    const classes = styles({ position })

    return <div className={classes.align}>
        {children}
    </div>

}
