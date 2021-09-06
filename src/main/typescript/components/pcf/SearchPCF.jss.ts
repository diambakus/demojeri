import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
      boxContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1
      },
      iconButton: {
        padding: 10
      }
}))
