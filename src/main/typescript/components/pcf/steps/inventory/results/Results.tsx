import React, { useEffect, useState } from 'react'
import { POST } from '../../../../../backend'
import { ImpactResult, OperationInputs, PCF, getTitle } from '../../../../../types/PCF'
import { getResultUnit } from '../../../../../utils'
import Loader from '../../../../loader/Loader'
import ResultTable, { ResultContent } from './ResultTable'
import styles from './Results.jss'
import { operations as itemsOperations } from '../../../data/AllItems'

interface ComponentProps {
    pcf: PCF
    setPcf?: (pcf: PCF) => void
}

export default ({ pcf, setPcf }: ComponentProps) => {

    const classes = styles()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let canceled = false
        POST(`pcfs/calculate/${pcf.id}`, null, (impactResults: ImpactResult[]) => {
            if (!canceled)
                setPcf({ ...pcf, impactResults })
            setLoading(false)
        })
        return () => canceled = true
    }, [])

    const getKey = (op: OperationInputs) => {
        let key = 'operation-' + op.position + '-' + op.selectType.level1
        if (op.selectType.level2 > 0)
            key += '-' + op.selectType.level2
        if (op.selectType.level3 > 0)
            key += '-' + op.selectType.level3
        return key
    }

    const semiProduct = pcf.impactResults.find(r => r.key === 'operation-semiProduct')
    const addHotSpotAnalyse: ResultContent[] = [{ description: 'Halbzeug', value: semiProduct ? semiProduct.amount : 0 }]
    pcf.operationInputs.forEach(op => {
        const i = pcf.impactResults.find(r => r.key === getKey(op))
        addHotSpotAnalyse.push({
            description: getTitle(itemsOperations, op.selectType), // TODO replace with getTitle(op.selectType)
            value: i ? i.amount : 0
        })
    })

    const scopes = ['Scope 1 (direkte Emissionen)', 'Scope 2 (Emissionen aus Energiegewinnung)', 'Scope 3 (Emissionen aus der Produktion von Vorprodukten)']
    const addScopeAnalyse: ResultContent[] = []
    scopes.forEach((scope, index) => {
        const i = pcf.impactResults.find(r => r.key === 'scope-' + (index + 1))
        addScopeAnalyse.push({
            description: scope,
            value: i ? i.amount : 0
        })
    })

    const makeTitle = (relatedTable: string): string => relatedTable

    if (loading)
        return <Loader />

    const resultUnit = getResultUnit(pcf)
    return <div>
        <ResultTable unit={resultUnit} title={makeTitle('Hotspot-Analyse:')} resultContent={addHotSpotAnalyse} names={['Prozess', `${resultUnit} CO₂eq (direkt+indirekt)`]} />
        <ResultTable unit={resultUnit} title={makeTitle('Scope-Analyse:')} resultContent={addScopeAnalyse} names={['Scope', `${resultUnit} CO₂eq`]} />
        <div className={classes.footer}>
            © NOCARBforging2050 – IMU Industrieverband Massivumformung e.V.
        </div>
    </div>
}
