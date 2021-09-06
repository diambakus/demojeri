import { Typography } from '@material-ui/core'
import { SentimentDissatisfied as ErrorIcon } from '@material-ui/icons'
import * as React from 'react'
import styles from './40x.jss'

interface ComponentProps {
    status: 403 | 404 | 500
    text?: string
}

export default ({ status, text }: ComponentProps) => {

    const classes = styles()

    const getText = () => {
        if (text)
            return text
        switch (status) {
            case 403: return 'Zugang verweigert'
            case 404: return 'Seite nicht gefunden'
            case 500: return 'Ein unbekannter Fehler ist aufgetreten'
        }
    }

    return <div className={classes.errorPage}>
        <ErrorIcon className={classes.icon}/>
        <Typography variant='h2'>
            {status}
        </Typography>
        <hr/>
        <Typography>{getText()}</Typography>
    </div>

}
