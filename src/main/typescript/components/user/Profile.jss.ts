import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    profile: {
        maxWidth: 1200,
        margin: '0 auto'
    },
    dropDownContainer: {
        margin: `${theme.spacing(1)}px 0`
    },
    label: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    pwHint: {
        fontSize: 'small',
        color: 'grey',
        paddingBottom: 0,
        marginBottom: 0
    }
}))
