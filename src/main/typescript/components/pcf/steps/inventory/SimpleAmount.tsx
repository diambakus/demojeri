import { FormControl, Grid, Input, InputAdornment } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { formatNumber } from '../../../../utils'
import Title from '../../../util/Title'
import styles from './Amount.jss'

interface ComponentProps {
    prefix?: string
    title?: string
    icon?: JSX.Element
    value: number
    unit: string
    explanation?: string
    className?: string
    autoFocus?: boolean
    color?: string
    children?: any
    disabled?: boolean
    name?: string
    onChange: (value: number) => void
    suffix?: string
}

export default ({ prefix, title, icon, value, unit, autoFocus, color, disabled, name, onChange, suffix }: ComponentProps) => {

    const classes = styles({ color })
    const [amount, setAmount] = useState(formatNumber(value))

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled && disabled === true)
            setAmount(formatNumber(0))
        return () => { canceled = true }
    }, [disabled])

    const validateAmount = () => {
        const v = parseFloat((amount || '0').replace(/\./g, '').replace(',', '.'))
        if (v === value)
            return
        setAmount(formatNumber(v))
        onChange(v)
    }

    const formatUnit = (unit: string) => {
        const content = unit.replace('CO2', 'CO2')
        return content
    }
    return <Fragment>
        <div className={classes.amount}>
            {title ?
                <Title caption bold small color={color}>
                    <div className={classes.titleContainer}>
                        <div>{icon}</div>
                        <div>{title}</div>
                    </div>
                </Title>
                : null}
            <Grid container spacing={1} style={{ alignItems: 'center', marginLeft: '1px' }}>
                <Grid item>{`${prefix}: `}</Grid>
                <Grid item xs={suffix ? 2 : 4}>
                    <FormControl fullWidth onBlur={validateAmount}>
                        <Input id='amount' name={name || 'amount'} autoFocus={autoFocus} value={amount} classes={{ underline: classes.colored }}
                            onChange={e => setAmount(e.target.value)} endAdornment={<InputAdornment position='end'>
                                <span className={classes.colored}>{formatUnit(unit)}</span></InputAdornment>} inputProps={{ 'aria-label': 'weight' }}
                            disabled={disabled} />
                    </FormControl>
                </Grid>
                {suffix ? <Grid item>{`${suffix}: `}</Grid> : null}
            </Grid>
        </div>
    </Fragment>
}
