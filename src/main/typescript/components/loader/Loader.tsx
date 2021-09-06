import { CircularProgress, Fade } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './Loader.jss'

export default () => {

    const classes = styles()

    const [show, setShow] = useState(false)

    useEffect(() => {
        let canceled = false
        setTimeout(() => {
            if (canceled)
                return
            setShow(true)
        }, 200)
        return () => canceled = true
    })

    if (!show)
        return null
    return <div className={classes.loader}>
        <div className={classes.background} />
        <Fade unmountOnExit in timeout={800}>
            <CircularProgress color='primary'/>
        </Fade>
    </div>
}
