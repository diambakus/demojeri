import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    leftBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    rightBox: {
        marginTop: theme.spacing(2)
    },
    preview: {
        maxWidth: 100,
        maxHeight: 100
    }
}))
