import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    leftBox: {
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(2)
        },
        paddingBottom: theme.spacing(4)
    },
    rightBox: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(2)
        },
        paddingBottom: theme.spacing(4)
    },
    column: {
        marginLeft: theme.spacing(2)
    },
    paragraph: {
        fontWeight: 'bold',
        margin: 0,
        fontSize: '.938rem'
    },
    divider: {
        borderBottom: '1px solid black',
        margin: `${theme.spacing(1)}px 0`
    },
    value: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.main,
        fontSize: '.938rem',
    },
    resultOutGrid: {
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '3px 3px 5px 3px #ccc',
        backgroundColor: '#dcdcdc',
    },
    resultInGrid: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    orgLogoGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    orgLogo: {
        alt: 'company logo',
        width: 'auto',
        height: 'auto',
        maxWidth: '240px',
        maxHeight: '150px',
        [`@media print`]: {
            maxWidth: '100%',
        }
    },
    defaultLogo: {
        backgroundImage: 'url(/images/placeholder.png)',
    },
    geralInfoGrid: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4)
    },
    nocarbLogo: {
        width: '250px',
        height: '96px',
        [`@media print`]: {
            width: '200px',
            height: '77px'
        }
    },
    nocarbLogoGrid: {
        boxShadow: '3px 3px 5px 3px #ccc',
        backgroundColor: '#dcdcdc',
        justifyContent: 'center',
        display: 'flex'
    },
    mainTitleGrid: {
        fontWeight: 'bold',
        color: theme.palette.secondary.main,
        fontSize: '1.4rem',
        display: 'flex',
        justifyContent: 'center',
    },
    underTitleGrid: {
        fontSize: '0.9rem',
        display: 'flex',
        justifyContent: 'center',
        [`@media print`]: {
            fontSize: '0.7rem'
        }
    },
    fredGrid: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    fredDescriptionGrid: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'baseline'
    },
    orangedBoldedLargerText: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    whiteSpaceOnly: {
        whiteSpace: 'pre-wrap'
    },
    toolT: {
        fontSize: '1.0rem'
    }
}))
