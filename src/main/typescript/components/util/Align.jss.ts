import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
    position: string
}

export default makeStyles<Theme, StyleProps>({
    align: {
        display: 'flex',
        justifyContent: (props) => `flex-${props.position}`
    }
})
