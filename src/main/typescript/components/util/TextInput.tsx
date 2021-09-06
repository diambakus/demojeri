import { TextField, InputAdornment } from '@material-ui/core'
import React from 'react'
import { FieldError, getErrorMessage } from '../../backend'

interface ComponentProps {
    id: string
    label?: string
    value: string
    type?: React.InputHTMLAttributes<unknown>['type']
    className?: string
    multiline?: boolean
    rows?: number
    autoFocus?: boolean
    error?: FieldError
    endAdornment?: string
    margin?: 'normal' | 'dense' | 'none'
    variant?: 'filled' | 'outlined' | 'standard'
    setValue: (value: string) => void
    helperText?: string
    maxLength?: number
    required?: boolean
    disabled?: boolean
    placeholder?: string
}

export default ({ id, label, value, type, className, multiline, rows, autoFocus, error, endAdornment, margin, variant, setValue, helperText, maxLength, required, disabled, placeholder }: ComponentProps) => {
    return <TextField fullWidth multiline={multiline} rows={rows} autoFocus={autoFocus}
        id={id} name={id} label={label} value={value || ''} onChange={e => setValue(e.target.value)}
        type={type || 'text'} className={className} margin={margin || 'normal'} variant={variant || 'outlined'} size='small'
        error={error && error.field === id} helperText={helperText || getErrorMessage(error, id)}
        InputProps={endAdornment ? { endAdornment: <InputAdornment position='end'>{endAdornment}</InputAdornment> } : null}
        inputProps={{ maxLength: maxLength }} required={required || false} disabled={disabled || false} placeholder={placeholder} />
}
