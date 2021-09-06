import { makeStyles, Theme } from '@material-ui/core'
import { materialIcon } from './Exchange.jss'

export default makeStyles((theme: Theme) => ({
    product: {
        background: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    materialIcon
}))
