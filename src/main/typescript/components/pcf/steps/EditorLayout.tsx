import { Grid } from '@material-ui/core'
import React from 'react'
import styles from './EditorLayout.jss'

interface ComponentProps {
    sidebar?: JSX.Element
    children: any
    resultDisplay?: boolean
    centerSidebar?: boolean
}

export default ({ sidebar, children, resultDisplay, centerSidebar }: ComponentProps) => {

    const classes = styles({ centerSidebar })

    return <Grid container>
        <Grid item lg={2} className={classes.sidebar}>
            {sidebar}
        </Grid>
        <Grid item xs={12} lg={resultDisplay ? 8 : sidebar ? 8 : 7} className={classes.content}>
            {children}
        </Grid>
    </Grid>
}
