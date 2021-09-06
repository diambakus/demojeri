import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    main: {
        marginTop: 64,
        width: '100%',
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'column' as 'column',
        height: 'calc(100% - 64px)',
        overflow: 'auto',
        [theme.breakpoints.only('xs')]: {
            marginTop: 48,
            height: 'calc(100% - 48px)'
        },
        [`@media print`]: {//remove horizontal bar on printing result
            overflow: 'hidden',
            display: 'table'
        }
    },  
    mainBg: {
        background: 'url(/images/background.png) no-repeat center center fixed',
        backgroundSize: 'cover',
    },
    content: {
        minHeight: '100%'
    },
    contentWithMargin: {
        margin: '48px 64px 24px 64px',
        [theme.breakpoints.only('xs')]: {
            margin: '64px 16px 16px 16px'
        },
        [theme.breakpoints.only('sm')]: {
            margin: '32px 64px 24px 64px'
        }
    },
    centered: {
        padding: '9%',
        display: 'flex',
        justifyContent: 'center'
    }
}))
