import { makeStyles } from '@material-ui/core'

export default makeStyles({
    loader: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed' as 'fixed',
        top: '50%',
        right: '50%',
        bottom: '50%',
        zIndex: 10002,
        left: '50%'
    },
    background: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10001,
        backgroundColor: 'rgba(0, 0, 0, 0.25)'
    }
})
