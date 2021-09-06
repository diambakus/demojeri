import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    stepper: {
        background: 'transparent',
        padding: '5px'
    },
    editor: {
        paddingTop: 48,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
    },
    editorContent: {
        flex: 1,
        marginTop: 50,
        [theme.breakpoints.up('md')]: {
            padding: '0 64px 24px 64px'
        }
    },
    [`@media print`]: {
        stepper: {
            display: 'none'
        }
    }
}))
