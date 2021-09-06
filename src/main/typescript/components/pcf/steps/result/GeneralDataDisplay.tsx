import { Grid } from '@material-ui/core'
import React from 'react'
import { PCF } from '../../../../types/PCF'
import { formatResult, getResultUnit } from '../../../../utils'
import { NOCARB } from '../../../constants'
import { material } from '../../data/AllItems'
import styles from './GeneralDataDisplay.jss'

type ComponentProps = {
    pcf: PCF
}

export default ({ pcf }: ComponentProps) => {

    const classes = styles()

    const renderColumn = (title: string, value: string | JSX.Element) =>
        <div>
            <div className={classes.column}>
                <Grid container spacing={1} key={title}><Grid item className={classes.paragraph} key={title}>{title}</Grid>
                    <Grid className={classes.value} key='value'>{value}</Grid></Grid>
            </div>
        </div>

    const getProcess = (): string => {
        return `${pcf.selectType.level1 !== -1 ? material[pcf.selectType.level1 - 1].label : ''}${pcf.selectType.level2 !== -1 ? ', ' + material[pcf.selectType.level1 - 1].children[pcf.selectType.level2 - 1].label : ''}${pcf.selectType.level3 !== -1 ? ', ' + material[pcf.selectType.level1 - 1].children[pcf.selectType.level2 - 1].children[pcf.selectType.level3 - 1].label : ''}`
    }

    const fredDescription = () => {
        return <Grid item xs={12} sm={12} className={classes.fredDescriptionGrid}>
            <span className={classes.orangedBoldedLargerText}>F</span>orging <span className={[classes.orangedBoldedLargerText, classes.whiteSpaceOnly].join(' ')}> F</span>ootprint <span className={[classes.orangedBoldedLargerText, classes.whiteSpaceOnly].join(' ')}> RED</span>uction <span className={[classes.whiteSpaceOnly, classes.toolT].join(' ')}> T</span>ool
        </Grid>
    }

    const result = pcf.impactResults.find(i => i.key === 'total') ?? { amount: 0 }
    return <div>
        <Grid container>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={4} sm={4} className={classes.nocarbLogoGrid}>
                    <img src={NOCARB} alt='NOCARB logo' className={classes.nocarbLogo} />
                </Grid>
                <Grid item container xs={8} sm={8}>
                    <Grid item xs={12} sm={12} className={[classes.fredGrid, classes.orangedBoldedLargerText].join(' ')}>FRED</Grid>
                    {fredDescription()}
                </Grid>
            </Grid>
            <Grid item container xs={12} style={{ marginTop: 24 }}>
                <Grid item xs={12} className={classes.mainTitleGrid}>Product Carbon Footprint</Grid>
                <Grid item xs={12} className={classes.underTitleGrid}>
                    berechnet mit dem Carbon Footprint Rechner des Projekts NOCARBforging2050 konform zur DIN EN ISO 14067
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} className={classes.geralInfoGrid}>
                <Grid item xs={9} sm={9} className={classes.leftBox}>
                    {renderColumn('Produktname:', pcf.declaredProduct)}
                    {renderColumn('Ausliefergewicht:', formatResult(pcf.productWeight, getResultUnit(pcf)))}
                    {renderColumn('Produzent:', pcf.organization.name)}
                    {renderColumn('Werkstoff:', getProcess())}
                </Grid>
                <Grid item xs={3} sm={3} className={classes.orgLogoGrid}>
                    {pcf.organization.logo
                        ? <img src={window.atob(pcf.organization.logo)} className={classes.orgLogo} />
                        : <img className={classes.defaultLogo} width='130px' height='125px'/>
                    }
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} className={classes.resultOutGrid}>
                <Grid item className={classes.resultInGrid}>Product Carbon Footprint pro Produkt: {formatResult(result.amount, getResultUnit(pcf))} CO₂eq</Grid>
            </Grid>
        </Grid>
    </div>
}
