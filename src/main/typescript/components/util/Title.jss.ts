import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
    centered: boolean
    bold: boolean
    small: boolean
    caption: boolean
    lines: boolean
    color?: string
}

const hr = {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
}

export default makeStyles<Theme, StyleProps>((theme: Theme) => ({
    grow: {
        flexGrow: 1
    },
    container: {
        margin: `${theme.spacing(1)}px 0`,
        display: 'flex',
        alignItems: 'center'
    },
    hrLeft: {
        ...hr,
        flex: props => props.centered ? 1 : undefined,
        width: props => !props.centered ? theme.spacing(3) : undefined
    },
    hrRight: {
        ...hr,
        flex: 1
    },
    content: {
        color: props => props.color || theme.palette.primary.main,
        textTransform: props => props.caption ? 'uppercase' : undefined,
        fontWeight: props => props.bold ? 'bold' : 'normal',
        fontSize: props => props.small ? '0.9em' : '1.3em',
        marginRight: props => props.lines ? theme.spacing(1) : 0,
        marginLeft: props => props.lines ? theme.spacing(1) : 0
    }
}))
