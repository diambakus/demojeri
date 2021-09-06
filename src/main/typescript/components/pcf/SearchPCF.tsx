import { IconButton, Paper, TextField } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import styles from './SearchPCF.jss'

export default () => {

    const classes = styles()

    return (
        <Paper component='form' className={classes.boxContainer}>
            <TextField variant='standard' className={classes.input} placeholder='Eine Produkt Carbon fussabdruck finden' inputProps={{ 'aria-label': 'search' }} />
            <IconButton type='submit' className={classes.iconButton} aria-label='search'>
                <SearchOutlined />
            </IconButton>
    </Paper>
    )
}
