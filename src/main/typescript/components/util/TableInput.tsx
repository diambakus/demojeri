import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import TextInput from './TextInput'

export interface TableRow {
    labels: string[]
    value?: string
    setValue: (value: string) => void
}

interface ComponentProps {
    headers: string[]
    rows: TableRow[]
    inputCell: number
}

export default function ({ headers, rows, inputCell }: ComponentProps) {

    const getLabel = (rowIndex: number, cellIndex: number): string => {
        let labelIndex = cellIndex
        if (cellIndex > inputCell)
            labelIndex -= 1
        const labels = rows[rowIndex].labels
        if (labels.length <= labelIndex)
            return null
        return labels[labelIndex]
    }

    return <Table size='small'>
        <TableHead>
            <TableRow>
                {headers.map((header, index) =>
                    <TableCell key={index}>
                        <strong>{header}</strong>
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, rowIndex) =>
                <TableRow key={rowIndex}>
                    {headers.map((_, cellIndex) =>
                        <TableCell>
                            {cellIndex !== inputCell
                                ? getLabel(rowIndex, cellIndex)
                                : <TextInput id={`table-input-${rowIndex}`} margin='none' variant='standard' value={row.value} setValue={row.setValue}/>
                            }
                        </TableCell>
                    )}
                </TableRow>
            )}
        </TableBody>
    </Table>

}
