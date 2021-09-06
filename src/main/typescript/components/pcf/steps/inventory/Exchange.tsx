import { FormControl, MenuItem, Select, Tooltip } from '@material-ui/core'
import { Cached, FilterDrama, Fireplace, FlashOn as FlashOnIcon, LocalShipping as LocalShippingIcon, WidgetsSharp as WidgetsSharpIcon } from '@material-ui/icons'
import React from 'react'
import { ExchangeDescriptor, ExchangeType, PCF } from '../../../../types/PCF'
import Amount from './Amount'
import styles from './Exchange.jss'

interface ComponentProps {
    exchange: ExchangeDescriptor
    pcf: PCF
    autoFocus?: boolean
    setPcf: (pcf: PCF) => void
    activeOperation: number
}

export default ({ exchange, pcf, autoFocus, setPcf, activeOperation }: ComponentProps) => {

    const classes = styles()
    const hasPotentialProviders = exchange.providers && exchange.providers.length
    const hasSingleProvider = exchange.providers && exchange.providers.length === 1
    let operationInputs = pcf.operationInputs.find((_, index) => (index === activeOperation))
    let input = operationInputs.calculationInputs.find(input => input.no === exchange.no)

    const onChange = (value: number) => {
        input.amount = value
        setPcf({ ...pcf, impactResults: [] })
    }

    const getIcon = (type: ExchangeType) => {
        switch (type) {
            case 'recyclable': return <Cached className={classes.recyclableIcon} />
            case 'material': return <WidgetsSharpIcon className={classes.materialIcon} />
            case 'transport': return <LocalShippingIcon className={classes.transportIcon} />
            case 'power': return <FlashOnIcon className={classes.energyIcon} />
            case 'emission': return <FilterDrama className={classes.emissionIcon} />
            case 'gas': return <Fireplace className={classes.gasIcon} />
            default: return null
        }
    }

    const renderProviderSelect = () => {
        const provider = exchange.providers.find(provider => (provider.refId === input.providerRefId))
        if (hasSingleProvider)
            return <Tooltip title={provider.name}>
                <Select disabled disableUnderline fullWidth value={provider.name} className={classes.providerSingleSelect} classes={{ disabled: classes.disabled, icon: classes.disabledIcon }}>
                    <MenuItem value={provider.name}>{provider.name}</MenuItem>
                </Select>
            </Tooltip>
        return <FormControl size='small'>
            {
                hasPotentialProviders ?
                    <Select displayEmpty renderValue={value => value ? exchange.providers.find(p => p.refId === value).name :
                        <span className={classes.empty}>Bitte auswählen</span>} id='providerRefId' name='providerRefId' className={classes.providerMultiSelect}
                        value={provider ? provider.refId : ''} onChange={e => {
                            input.providerRefId = e.target.value as string
                            setPcf({ ...pcf, impactResults: [] })
                        }}>
                        {
                            exchange.providers.map((provider, index) =>
                                <MenuItem value={provider.refId} key={index + 1}>{provider.name}</MenuItem>
                            )
                        }
                    </Select> :
                    null
            }
        </FormControl>
    }

    return <Amount icon={getIcon(exchange.type)} autoFocus={autoFocus} title={exchange.product} unit={exchange.unit} explanation={exchange.explanation} value={input.amount} onChange={onChange}>
        {renderProviderSelect()}
    </Amount>

}
