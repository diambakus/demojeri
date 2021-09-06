import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@material-ui/core'
import React from 'react'
import { FieldError, getErrorMessage } from '../../backend'

interface Item {
    value: string | number
    label: string
}

interface ComponentProps {
    id: string
    value: string | number
    label: string
    items: Item[]
    error?: FieldError
    displayEmpty?: boolean
    className?: string
    onChange: (e) => void
    name?: string
    disabled?: boolean
}

export default ({ id, value, label, items, error, displayEmpty, className, onChange, name, disabled }: ComponentProps) => {

    return <FormControl fullWidth margin='dense' variant='outlined' error={error && error.field === id} className={className}>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select displayEmpty={displayEmpty} labelId={`${id}-label`} id={id} value={value} onChange={onChange} label={label} name={name || undefined} disabled={disabled}>
            {displayEmpty ?
                <MenuItem key={items?.length + 1} value=''><em>&nbsp;</em></MenuItem>
                : null}
            {items.map((item, index) =>
                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
            )}
        </Select>
        {error ?
            <FormHelperText>{getErrorMessage(error, id)}</FormHelperText>
            : null}
    </FormControl>

}
