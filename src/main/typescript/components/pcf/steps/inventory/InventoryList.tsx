import { Divider } from '@material-ui/core'
import React, { Fragment } from 'react'
import { ExchangeDescriptor, ExchangeType, PCF, Operation } from '../../../../types/PCF'
import Exchange from './Exchange'
import SimpleAmount from './SimpleAmount'
export interface ComponentProps {
    operation: Operation
    pcf: PCF
    setPcf: (pcf: PCF) => void
    activeOperation: number
}

export default ({ operation, pcf, setPcf, activeOperation }: ComponentProps) => {

    const typeOrder: ExchangeType[] = ['material', 'transport', 'power', 'emission', 'gas', 'recyclable']
    const compareByType = (e1: ExchangeDescriptor, e2: ExchangeDescriptor) =>
        typeOrder.indexOf(e1.type) - typeOrder.indexOf(e2.type)

    const operationInput = pcf.operationInputs.find((_, index) => (index === activeOperation))
    const renderLoss = () => {
        return ((operationInput !== null) && (operationInput.loss !== -1)) ? <Fragment key={activeOperation + '_loss_'+operation.no}>
            <Divider style={{ marginBottom: 16 }} />
            <SimpleAmount value={operationInput.loss * 100} onChange={value => setPcf({
                ...pcf, operationInputs: [...pcf.operationInputs.slice(0, activeOperation),
                { ...operationInput, loss: value / 100 }, ...pcf.operationInputs.slice(activeOperation + 1)]
            })} unit='%' prefix='Materialverlust'/>
        </Fragment> : null
    }

    return <div>
        {operation.exchanges.sort(compareByType).map(exchange =>
            <Exchange key={activeOperation + '_' + exchange.no} pcf={pcf} setPcf={setPcf} exchange={exchange} activeOperation={activeOperation} />
        )}
        {
            renderLoss()
        }
    </div>
}
