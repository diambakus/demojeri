import { Grid } from '@material-ui/core'
import React, { ChangeEvent, Fragment } from 'react'
import { ILevel, Item, findItem } from '../../../../types/PCF'
import DropDown from '../../../util/DropDown'
import styles from './SelectSemiProd.jss'

interface ComponentProps {
    items: Item[]
    orientation?: 'vertical' | 'horizontal'
    selectType: ILevel
    setSelectType: (selectType: ILevel) => void
    disabled?: boolean
}

const MultiSelect = ({ items, orientation, selectType, setSelectType, disabled }: ComponentProps) => {

    const classes = styles()
    let children1: Item[] = []
    let children2: Item[] = []

    selectType.level1 > -1 &&
        findItem(items, selectType.level1).children!! &&
        findItem(items, selectType.level1).children.length > 0 ? findItem(items, selectType.level1).children?.forEach(item => children1.push(item)) : null
    selectType.level2 > -1 ? children1.length > 0 ? findItem(children1, selectType.level2).children?.forEach(item => children2.push(item)) : null : null

    const handleChange = (e: ChangeEvent<{ name: string, value: unknown }>) => {
        const { name, value } = e.target
        if (name === 'level1') {
            const level: number = value as number
            if (level > -1)
                setSelectType({ ...selectType, [name]: level, refId: findItem(items, level).refId, level2: -1, level3: -1 })
        }
        if (name === 'level2') {
            const level: number = value as number
            if (level > -1)
                setSelectType({ ...selectType, [name]: level, refId: level > -1 ? findItem(children1, level).refId : '', level3: -1 })
        }
        if (name === 'level3') {
            const level: number = value as number
            if (level > -1)
                setSelectType({ ...selectType, [name]: level, refId: level > -1 ? findItem(children2, level).refId : '' })
        }
    }

    return (
        <Fragment>
            <Grid item xs={12} sm={orientation === 'horizontal' ? 4 : 12} md={orientation === 'horizontal' ? 4 : 12}>
                <DropDown id='level1Id' value={selectType.level1} label='Kategorie auswählen' className={classes.input} name='level1'
                    items={items.map(item =>
                        ({ label: item.label, value: item.id }))} onChange={e => handleChange(e)}
                    disabled={disabled} />
            </Grid>
            <Grid item xs={12} sm={orientation === 'horizontal' ? 4 : 12} md={orientation === 'horizontal' ? 4 : 12}>
                <DropDown id='level2Id' value={selectType.level2} label='Unterkategorie auswählen' className={classes.input} name='level2'
                    items={children1.map(item => ({ label: item.label, value: item.id }))}
                    onChange={e => handleChange(e)} disabled={!(selectType.level1 >= 0 && children1.length > 0) || disabled} /></Grid>
            <Grid item xs={12} sm={orientation === 'horizontal' ? 4 : 12} md={orientation === 'horizontal' ? 4 : 12}>
                <DropDown id='level3Id' value={selectType.level3} label='Unterkategorie auswählen' className={classes.input} name='level3'
                    items={children2.map(item => ({ label: item.label, value: item.id }))}
                    onChange={e => handleChange(e)} disabled={!(selectType.level2 >= 0 && children2.length > 0) || disabled} /></Grid>
        </Fragment>
    )
}

export default MultiSelect