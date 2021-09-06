import { Grid } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { ILevel, Item, PCF } from '../../../../types/PCF'
import EditorLayout from '../../../pcf/steps/EditorLayout'
import DropDown from '../../../util/DropDown'
import Form from '../../../util/Form'
import ModelInput from '../../../util/ModelInput'
import Title from '../../../util/Title'
import { air, electricity, gas, material } from '../../data/AllItems'
import SimpleAmount from '../inventory/SimpleAmount'
import styles from './GeneralInfo.jss'
import MultiSelect from './MultiSelect'

type ComponentProps = {
    pcf: PCF
    setPcf: (pcf: PCF) => void
    color?: string
}

export default ({ pcf, setPcf, color }: ComponentProps) => {

    const classes = styles({ color })
    const [selectType, setSelectType] = useState<ILevel>({
        level1: pcf.selectType.level1, level2: pcf.selectType.level2,
        level3: pcf.selectType.level3, refId: pcf.selectType.refId
    })

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled)
            setPcf({ ...pcf, selectType, semiProduct: selectType.refId })
        return () => { canceled = true }
    }, [selectType])

    const renderFragment = (idField: keyof PCF, qttyField: keyof PCF, items: Item[], label: string, qttyLabel: string, qttyUnit: string) => {
        let value: string = pcf[idField] as string
        if (value === '')
            value = 'null'
        else if (!value)
            value = ''
        return <Fragment>
            <DropDown id={idField} value={value} label={label} className={classes.input}
                items={items.map(item => ({ value: item.refId || 'null', label: item.label }))} name={idField}
                onChange={event => setPcf({
                    ...pcf,
                    [qttyField]: 0,
                    [idField]: event.target.value === 'null' ? '' : event.target.value
                })} />
            <Grid item container xs={12} sm={12} md={12} spacing={1} className={classes.inputFieldGrid}>
                <SimpleAmount name={qttyField} prefix={qttyLabel} value={pcf[qttyField] as number}
                    onChange={value => setPcf({ ...pcf, [qttyField]: value })} unit={qttyUnit} disabled={pcf[idField] !== ''} />
            </Grid>
        </Fragment>
    }

    const inputGeneralProviders = () => {
        return (
            <div>
                <Title caption lines centered>Allgemeine Angaben</Title>
                <Grid container component={Form}>
                    <Grid item xs={12} sm={12} md={12}>
                        <ModelInput autoFocus id='declaredProduct' label='Name des Produktes' model={pcf} setModel={setPcf} />
                        <SimpleAmount prefix='Ausliefergewicht' value={pcf.productWeight} name='productWeight'
                            onChange={value => setPcf({ ...pcf, productWeight: value })} unit='kg' />
                        {renderFragment('electricityMix', 'electricityMixQtty', electricity, 'Elektrischer Strom', 'Carbon Footprint des individuellen Strommixes', 'kg CO₂eq/kWh')}
                        {renderFragment('gasMix', 'gasMixQtty', gas, 'Gas', 'Carbon Footprint des individuellen Gasmixes', 'kg CO₂eq/kWh')}
                        {renderFragment('compressedAir', 'compressedAirQtty', air, 'Strombedarf für Drucklufterzeugung', 'Individueller Strombedarf für Drucklufterzeugung', 'kWh/m³')}
                    </Grid>
                </Grid>
            </div>
        )
    }

    const inputSemiProduct = () => {
        const enableIndvidueller: boolean = pcf.selectType.level1 !== -1 && pcf.selectType.level2 === -1 &&
            pcf.selectType.level3 === -1 && !material[pcf.selectType.level1 - 1].refId && (!material[pcf.selectType.level1 - 1].children || !material[pcf.selectType.level1 - 1].children.length)
        return (
            <div>
                <Title caption lines centered>Angaben zum Halbzeug</Title>
                <Grid container component={Form}>
                    <Grid item xs={12} sm={12} md={12}>
                        <MultiSelect items={material} selectType={selectType} setSelectType={setSelectType} />
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} spacing={1} className={classes.inputFieldGrid}>
                        <SimpleAmount prefix='Individueller Carbon Footprint Halbzeug' value={pcf.semiProductQtty} name='semiProductQtty'
                            onChange={value => setPcf({ ...pcf, semiProductQtty: value })} unit='kg CO₂eq/kg' disabled={!enableIndvidueller} />
                    </Grid>
                </Grid>
            </div>
        )
    }

    return <EditorLayout>
        {inputGeneralProviders()}
        {inputSemiProduct()}
    </EditorLayout>

}
