import { Paper } from '@material-ui/core'
import classnames from 'classnames'
import React from 'react'
import styles from './Form.jss'

interface ComponentProps {
    id?: string
    className?: string
    children: any
}

export default ({ id, className, children }: ComponentProps) => {

    const classes = styles({})

    return <Paper id={id} component='form' className={classnames(classes.form, className)}>
        {children}
    </Paper>

}
