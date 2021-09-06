import { FormControl, Grid, Input, InputAdornment, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { formatNumber } from '../../../../utils'
import Title from '../../../util/Title'
import styles from './Amount.jss'
import Form from '../../../util/Form'

interface ComponentProps {
    title?: string
    icon?: JSX.Element
    value: number
    unit: string
    explanation?: string
    className?: string
    autoFocus?: boolean
    color?: string
    children?: any
    onChange: (value: number) => void
}

export default ({ title, icon, value, unit, explanation, className, autoFocus, color, children, onChange }: ComponentProps) => {

    const classes = styles({ color })
    const [amount, setAmount] = useState(formatNumber(value))

    const validateAmount = () => {
        const v = parseFloat((amount || '0').replace(/\./g, '').replace(',', '.'))
        if (v === value)
            return
        setAmount(formatNumber(v))
        onChange(v)
    }

    return <Form className={className}>
        <div className={classes.amount}>
            {title ?
                <Title caption bold small color={color}>
                    <div className={classes.titleContainer}>
                        <div>{icon}</div>
                        <div>{title}</div>
                    </div>
                </Title>
                : null}
            <Grid container>
                <Grid item xs={2}>
                    <FormControl fullWidth onBlur={validateAmount}>
                        <Input id='amount' name='amount' autoFocus={autoFocus} value={amount} classes={{ underline: classes.colored }} onChange={e => setAmount(e.target.value)}
                            endAdornment={<InputAdornment position='end' ><span className={classes.colored}>{unit}</span></InputAdornment>} inputProps={{ 'aria-label': 'weight' }} />
                    </FormControl>
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.contentContainer}>
                        {children}
                    </div>
                </Grid>
            </Grid>
            <Typography variant='caption' color='primary'>{explanation}</Typography>
        </div>
    </Form>
}
