import React from 'react'
import { FieldError } from '../../backend'
import TextInput from './TextInput'

interface ComponentProps<T> {
    id: string
    label?: string
    model: T
    type?: React.InputHTMLAttributes<unknown>['type']
    className?: string
    multiline?: boolean
    rows?: number
    autoFocus?: boolean
    error?: FieldError
    endAdornment?: string
    setModel: (value: T) => void
    helperText?: string
    maxLength?: number
    required?: boolean
    placeholder?: string
}

export default function <T>({ id, label, model, type, className, multiline, rows, autoFocus, error, endAdornment, setModel, helperText, maxLength, required, placeholder }: ComponentProps<T>) {

    return <TextInput multiline={multiline} rows={rows} autoFocus={autoFocus} type={type || 'text'} error={error} className={className}
        id={id} label={label} value={model[id] || ''} setValue={value => setModel({ ...model, [id]: value })} endAdornment={endAdornment}
        helperText={helperText} maxLength={maxLength} required={required || false} placeholder={placeholder} />

}
