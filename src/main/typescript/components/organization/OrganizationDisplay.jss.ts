import { makeStyles, Theme } from '@material-ui/core'

const logo = (theme: Theme) => ({
    alt: 'company logo',
    marginRight: theme.spacing(3)
})

export default makeStyles((theme: Theme) => ({
    form: {
        maxWidth: 600,
        margin: '0 auto'
    },
    card: {
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        ...logo(theme),
        width: 'auto',
        height: 'auto',
        maxWidth: '200px',
        maxHeight: '150px'
    },
    defaultLogo: {
        ...logo(theme),
        width: 128,
        height: 128,
        backgroundImage: 'url(/images/placeholder.png)'
    },
    firstParagraph: {
        marginTop: 0
    }
}))
