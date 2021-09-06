import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    stepper: {
        background: 'transparent',
        overflow: 'auto'
    },
    connector: {
        padding: 0,
        '& > *': {
            height: 42
        }
    },
    multiselect: {
        display: 'flex',
        flexDirection: 'row',
    },
    stepLabel: {
        '& .MuiStepLabel-label': {fontSize: 'x-small', textAlign: 'left'},
    },
    stepButton: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiStepIcon-active': {
            color: theme.palette.secondary.main,
        }
    },
    removeBtn: {
        color: theme.palette.primary.main,
        width: 24
    },
    multiSelectContainer: {
        marginBottom: theme.spacing(2)
    },
    addBtn: {
        color: 'green',
        width: 24
    },
    moveBtn: {
        color: theme.palette.primary.dark,
        width: 24
    }
}))
