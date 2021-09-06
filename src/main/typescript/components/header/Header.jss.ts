import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    navigation: {
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            marginLeft: '50px'
        }
    },
    language: {
        margin: '6px 4px',
        cursor: 'pointer'
    },
    navLink: {
        marginRight: '20px'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    mobileMenu: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    desktopMenu: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    [`@media print`]: {
        appBar: {
            display: 'none'
        }
    }
}))
