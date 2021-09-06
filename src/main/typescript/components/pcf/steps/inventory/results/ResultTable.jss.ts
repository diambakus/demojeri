import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    header: {
        border: '1px solid',
        fontWeight: 'bolder',
        color: theme.palette.primary.main,
        maxWidth: '100px'
    },
    value: {
        margin: 0,
        padding: `0 0 0 ${theme.spacing(2)}px`,
        border: '1px solid'
    },
    description: {
        margin: 0,
        padding: `0 0 0 ${theme.spacing(2)}px`,
        border: '1px solid',
        fontWeight: 'lighter',
        color: theme.palette.primary.main
    },
    modules: {
        border: '1px solid',
        justifyContent: 'center'
    },
    tableElements: {
        border: '1px solid'
    }
}))
