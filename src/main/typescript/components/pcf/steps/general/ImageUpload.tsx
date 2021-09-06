import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { EPD } from '../../../../types/EPD'
import { base64ToString, handleImageUpload, stringToBase64 } from '../../../../utils'
import styles from './ImageUpload.jss'

type ComponentProps = {
    type: 'smallPicture' | 'largePicture'
    note: string
    epd: EPD
    setEpd: (epd: EPD) => void
}

export default ({ type, note, epd, setEpd }: ComponentProps) => {

    const classes = styles()
    const [imagePreview, setImagePreview] = useState(stringToBase64(epd[type]))

    const handleInputChange = event =>
        handleImageUpload(event, image => {
            setImagePreview(image)
            transferToEpd(image)
        })

    return <div className={classes.uploadButton}>
        {note}
        <div>
            <img src={imagePreview} className={classes.thumbNail} />
        </div>
        <Button variant='contained' color='primary' size='small' component='label'>
            {type === 'smallPicture' ? 'Klein' : 'Groß'}
            <input type='file' onChange={e => handleInputChange(e)} className={classes.input} name={type} />
        </Button>
    </div>

    function transferToEpd(image: string) {
        if (!image)
            return
        setEpd({ ...epd, [type]: base64ToString(image) })
    }

}
