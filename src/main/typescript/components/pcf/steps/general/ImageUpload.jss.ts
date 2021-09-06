import { makeStyles } from '@material-ui/core'

export default makeStyles({
    uploadButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
        '& > *': {
            margin: '0px 3px 0px'
        }
    },
    input: {
        display: 'none'
    },
    thumbNail: {
        maxWidth: 30,
        maxHeight: 30,
        objectFit: 'cover'
    }
})
