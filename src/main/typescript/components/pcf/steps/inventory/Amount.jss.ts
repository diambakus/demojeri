import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
    color: string
}

export default makeStyles<Theme, StyleProps>((theme: Theme) => ({
    amount: {
        width: '100%'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleIcon: {
        width: 16,
        height: 16,
        marginRight: theme.spacing(0.5)
    },
    contentContainer: {
        fontSize: '1rem',
        marginLeft: theme.spacing(2)
    },
    colored: {
        color: props => props.color,
        '&:before': {
            borderBottomColor: props => props.color
        },
        '&:after': {
            borderBottomColor: props => props.color
        },
        '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: props => props.color
        }
    }
}))
