import { Grid } from '@material-ui/core'
import React from 'react'
import { EPD } from '../../../../types/EPD'
import styles from './ProductPix.jss'

type ComponentProps = {
    epd: EPD
}

export default ({ epd }: ComponentProps) => {

    const classes = styles()

    const renderPicture = (label: string, data: string) => {
        if (!data)
            return
        return <div>
            <div>{label}</div>
            <img src={window.atob(data)} className={classes.preview} />
        </div>
    }

    return <Grid container>
        <Grid item xs={6} className={classes.leftBox}>
            {renderPicture('Große Abbildung', epd.largePicture)}
        </Grid>
        <Grid item xs={6} className={classes.rightBox}>
            {renderPicture('Kleine Abbildung', epd.smallPicture)}
        </Grid>
    </Grid>

}
