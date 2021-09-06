import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
    sidebar: (props: any) => ({
        alignSelf: props.centerSidebar ? 'center' : undefined,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }),
    content: {
        padding: `0 ${theme.spacing(3)}px`
    }
}))
