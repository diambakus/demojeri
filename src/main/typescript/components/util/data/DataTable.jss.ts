import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
    maxWidth: string | number
}

export default makeStyles((theme: Theme) => ({
    container: (props: StyleProps) => ({
        maxWidth: props.maxWidth,
        margin: '0 auto'
    }),
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginRight: theme.spacing(2),
        flexGrow: 1,
        marginLeft: theme.spacing(2)
    },
    createButton: {
        margin: '10px 0'
    },
    buttonTextMd: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    buttonTextXs: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    searchBox: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: 400,
        [theme.breakpoints.down('sm')]: {
            width: 250
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    tableHeader: {
        fontWeight: 'bold',
        backgroundColor: 'rgb(250, 250, 250)'
    },
    tableRow: {
        borderBottom: 'none',
        fontSize: 'small',
        minWidth: 160,
        '&:last-child': {
            minWidth: 100
        }
    },
    hiddenXs: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    hiddenSm: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    footerCell: {
        borderTop: '1px solid rgba(224, 224, 224, 1)',
        textAlign: 'center',
        backgroundColor: 'rgb(250, 250, 250)',
        padding: theme.spacing(1)
    },
    sortIcon: {
        marginBottom: -theme.spacing(1)
    }
}))
