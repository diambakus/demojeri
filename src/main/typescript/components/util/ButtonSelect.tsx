import { Button } from '@material-ui/core'
import { KeyboardArrowDownSharp } from '@material-ui/icons'
import React, { Fragment, MouseEvent } from 'react'

interface ComponentProps {
    variant?: 'text' | 'outlined' | 'contained'
    size?: 'small' | 'medium' | 'large'
    onClick: (event: MouseEvent<any>) => void
    title: string
    fullWidth?: boolean
}

const ButtonSelect = ({ variant, size, onClick, title, fullWidth }: ComponentProps) => {
    return <Fragment>
        <Button variant={variant ?? 'outlined'} size={size ?? 'small'} onClick={onClick} fullWidth={fullWidth ?? false}>
            {title} <KeyboardArrowDownSharp />
        </Button>
    </Fragment>
}

export default ButtonSelect