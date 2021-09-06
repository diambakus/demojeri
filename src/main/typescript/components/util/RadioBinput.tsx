import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React, { ChangeEvent } from 'react'

type Placement = 'top' | 'start' | 'bottom' | 'end'

interface ComponentProps {
    id?: string,
    labels: string[],
    labelPlacement: Placement,
    handler: (event: ChangeEvent<HTMLInputElement>) => void,
    option: string
}

export default ({ labels, labelPlacement, handler, option }: ComponentProps) => {
    const buildRadioSet = (labels: string[], labelPlacement: Placement) => {
        if (!labels || labels.length === 0) return
        return (
            labels.map((label, index) => <FormControlLabel value={label} control={<Radio color='primary' />} label={label} labelPlacement={labelPlacement} key={index} />)
        )
    }

    return <RadioGroup row aria-label='position' name='position' value={option} onChange={e => handler(e)}>
        {buildRadioSet(labels, labelPlacement)}
    </RadioGroup>
}