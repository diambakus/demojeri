import { makeStyles, Theme } from '@material-ui/core'

interface StylesProps {
    color: string
}

const icon = {
    width: 24,
    height: 24,
    marginRight: 4
}

export default makeStyles<Theme, StylesProps>((theme: Theme) => ({
    input: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    },
    leftBox: {
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(2)
        }
    },
    rightBox: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(2)
        }
    },
    paddingTop: {
        paddingTop: theme.spacing(2)
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
    },
    number: {
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0
        }
    },
    inputFieldGrid: {
        alignItems: 'center'
    },
    transportIcon: {
        ...icon,
        fill: 'rgb(128, 0, 128)'
    },
    electricityIcon: {
        ...icon,
        fill: 'rgb(255, 153, 0)'
    },
    wasteIcon: {
        ...icon,
        fill: 'rgb(164, 97, 65)'
    },
    disabledIcon: {
        ...icon,
        fill: 'rgb(117,117,117)'
    }
}))
