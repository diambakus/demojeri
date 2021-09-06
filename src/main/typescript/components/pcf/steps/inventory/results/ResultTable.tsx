import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import React from 'react'
import { formatResult } from '../../../../../utils'
import Title from '../../../../util/Title'
import styles from './ResultTable.jss'

export interface ResultContent {
    description: string
    value: number
}

interface ComponentProps {
    title: string
    unit: string
    resultContent: ResultContent[]
    names: string[]
}

export default ({ title, unit, resultContent, names }: ComponentProps) => {

    const classes = styles()

    const Row = (props) =>
        <TableRow>
            <TableCell align='left' className={classes.description} width='70%'>{props.description}</TableCell>
            <TableCell align='left' className={classes.value} width='30%'>{props.value}</TableCell>
        </TableRow>

    return <TableContainer>
        <Title>{title}</Title>
        <Table size='small' className={classes.tableElements}>
            <TableBody>
                <TableRow>
                    <TableCell align='left' className={classes.header} width='70%'>{names[0]}</TableCell>
                    <TableCell align='left' className={classes.header} width='30%'>{names[1]}</TableCell>
                </TableRow>
                {resultContent.map((item, index) =>
                    <Row key={index} description={item.description} value={formatResult(item.value, unit)} />
                )}
            </TableBody>
        </Table>
    </TableContainer>

}
