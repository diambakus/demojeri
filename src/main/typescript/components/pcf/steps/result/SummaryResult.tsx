import React from 'react'
import { PCF } from '../../../../types/PCF'
import EditorLayout from '../EditorLayout'
import Results from '../inventory/results/Results'
import GeneralDataDisplay from './GeneralDataDisplay'

type ComponentProps = {
    pcf: PCF
    setPcf: (pcf: PCF) => void
}

export default ({ pcf, setPcf }: ComponentProps) => {

    return <EditorLayout resultDisplay={true}>
        <GeneralDataDisplay pcf={pcf} />
        <Results pcf={pcf} setPcf={setPcf}/>
    </EditorLayout>

}
