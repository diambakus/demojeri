import { makeStyles, Theme } from '@material-ui/core'

const logo = (theme: Theme) => ({
    alt: 'company logo',
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1)
})

export default makeStyles((theme: Theme) => ({
    organization: {
        maxWidth: 1200,
        margin: '0 auto'
    },
    header: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'flex-end'
        }
    },
    logo: {
        ...logo(theme),
        width: 'auto',
        height: 'auto',
        maxWidth: '200px',
        maxHeight: '150px',
    },
    defaultLogo: {
        ...logo(theme),
        width: 128,
        height: 128,
        backgroundImage: 'url(/images/placeholder.png)'
    },
    uploadButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2)
    },
    uploadButton: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(2)
    },
    uploadInput: {
        display: 'none'
    }
}))
