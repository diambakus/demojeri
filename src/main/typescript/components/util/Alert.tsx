import { Snackbar } from '@material-ui/core'
import React from 'react'
import styles from './Alert.jss'

interface ComponentProps {
    message: string
    setMessage: (value: string) => void
}

export default ({ message, setMessage }: ComponentProps) => {

    const classes = styles({})

    return <Snackbar open={!!message} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} message={message} onClose={() => setMessage('')} ContentProps={{ className: classes.alert }}/>

}
