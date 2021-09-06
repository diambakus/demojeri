import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
    gap: string | number
}

export default makeStyles<Theme, StyleProps>({
    grid: {
        display: 'grid',
        gridColumnGap: props => props.gap
    }
})
