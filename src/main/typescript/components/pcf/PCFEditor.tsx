import { Step, StepLabel, Stepper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { GET, PATCH, POST } from '../../backend'
import { defaultPCF, PCF, Operation, OperationInputs, areFilledUp, isOperationsInputsCompleted, ILevel, getTitle } from '../../types/PCF'
import { User } from '../../types/User'
import { addItem, removeItem, removeSpace, swapItems } from '../../utils'
import { ScrollTo } from '../App'
import Loader from '../loader/Loader'
import { operations as OPERATIONS } from './data/AllOperations'
import styles from './PCFEditor.jss'
import StepNavigator from './StepNavigator'
import GeneralInfo from './steps/general/GeneralInfo'
import InventoryInfo from './steps/inventory/InventoryInfo'
import SummaryResult from './steps/result/SummaryResult'
import { operations as itemsOperations } from '../pcf/data/AllItems'

const titles = [
    'Allgemeine Angaben',
    'Prozessbilanz',
    'Ergebnisse'
]

interface ComponentProps {
    id?: number
    currentUser: User
    setAlert: (message: string) => void
    scrollTo: ScrollTo
}

export default ({ id, currentUser, setAlert, scrollTo }: ComponentProps) => {

    const classes = styles()
    const [activeStep, setActiveStep] = useState(0)
    const [activeOperation, setActiveOperation] = useState(0)
    const [pcf, setPcf] = useState<PCF>({ ...defaultPCF, organization: currentUser.organization })
    const [loading, setLoading] = useState(!!id)
    const [opSteps, setOpSteps] = useState<string[]>([])
    const [addingAt, setAddingAt] = useState<number>(opSteps.length)
    const history = useHistory()

    useEffect(() => {
        if (!id)
            return
        let canceled = false
        GET(`pcfs/${id}`, (response: PCF) => {
            if (canceled || !response)
                return
            setPcf(response)
            setLoading(false)
        })
        return () => canceled = true
    }, [])

    const canContinue = (): boolean => {
        if (activeStep === 0)
            return areFilledUp(pcf)
        if (activeStep === 1)
            return isOperationsInputsCompleted(pcf, activeOperation)
        if (activeStep === 2)
            return false
        return true
    }

    const showResult = (): boolean =>
        activeStep === 1 && opSteps.length && activeOperation >= opSteps.length - 1

    const initSteps = (): string[] => {
        let steps: string[] = []
        pcf.operationInputs.sort((item1, item2) => item1.position - item2.position)
        pcf.operationInputs.forEach((item, index) => steps[index] = getTitle(itemsOperations, item.selectType))
        return steps
    }

    const next = () => {
        if (activeStep !== 1 || activeOperation === opSteps.length) {
            if (activeStep === 0) {
                setOpSteps(initSteps())
                _save(pcf => { window.history.replaceState(null, null, `/pcfs/${pcf.id}`) })
            }
            setActiveStep(activeStep + 1)
        }
        if (activeStep === 1 && activeOperation < opSteps.length)
            setActiveOperation(activeOperation + 1)
    }

    const previous = () => {
        if (activeStep !== 1 || activeOperation === 0)
            setActiveStep(activeStep - 1)
        else
            setActiveOperation(activeOperation - 1)
    }

    const reset = () => {
        setActiveStep(0)
        setActiveOperation(0)
    }

    const save = () =>
        _save(() => history.goBack())

    const _save = (callback: (pcf?: PCF) => void) => {
        const onSuccess = pcf => {
            pcf.changed = undefined
            setAlert('Carbon Footprint erfolgreich gespeichert!')
            setPcf(pcf)
            callback(pcf)
        }
        if (pcf.id)
            PATCH(`pcfs/${pcf.id}`, pcf, onSuccess).catch(err => console.log('ERROR: ' + err))
        else
            POST('pcfs', pcf, onSuccess)
    }

    const calculate = () => {
        _save(pcf => {
            window.history.replaceState(null, null, `/pcfs/${pcf.id}`)
            if (activeStep === 1)
                setActiveStep(2)
        })
    }

    const buildInputs = (operation: Operation, pos: number, level: ILevel) => {
        let operationsInputs: OperationInputs[] = [...pcf.operationInputs]
        let newEntry = {
            id: 0,
            position: pos,
            no: operation.no,
            loss: operation.loss,
            title: operation.title,
            selectType: {
                ...level,
                refId: ''
            },
            calculationInputs: operation.exchanges.map(exchange => ({
                id: 0,
                no: exchange.no,
                module: exchange.module,
                amount: exchange.amount,
                type: exchange.type,
                providerRefId: exchange.providers && exchange.providers.length === 1 ? exchange.providers[0].refId : null
            }))
        }
        operationsInputs.filter(item => (item.position >= pos)).forEach(item => item.position++)
        operationsInputs.push(newEntry)
        operationsInputs.sort((item1, item2) => item1.position - item2.position)
        return operationsInputs
    }

    const addStep = (title: string, position: number, level: ILevel) => {
        const operation: Operation = OPERATIONS.find(item => removeSpace(item.title.toLowerCase()) === removeSpace(title.toLowerCase()))
        if (!operation)
            return
        setOpSteps(addItem(opSteps, title, position))
        setPcf({ ...pcf, operationInputs: buildInputs(operation, position, level) })
        setActiveOperation(position)
    }

    const deleteStep = (position: number) => {
        if (!confirm(`Wollen Sie den Prozess wirklich löschen?`))
            return
        setOpSteps(removeItem(opSteps, position))
        setPcf({ ...pcf, operationInputs: removeItem(pcf.operationInputs, position) })
        if (position < activeOperation) {
            setActiveOperation(activeOperation - 1)
        }
    }

    const swapStep = (from: number, to: number) => {
        if (from < 0 || to >= opSteps.length)
            return
        setOpSteps(swapItems(opSteps, from, to))
        setPcf({ ...pcf, operationInputs: swapItems(pcf.operationInputs, from, to) })
        if (from === activeOperation) {
            setActiveOperation(to)
        }
    }

    const renderStepContent = () => {
        if (activeStep >= titles.length)
            return
        switch (activeStep) {
            case 0: return <GeneralInfo pcf={pcf} setPcf={setPcf} />
            case 1: return <InventoryInfo pcf={pcf} setPcf={setPcf} activeOperation={activeOperation} opSteps={opSteps} addingAt={addingAt} scrollTo={scrollTo}
                setActiveOperation={setActiveOperation} addStep={addStep} deleteStep={deleteStep} swapStep={swapStep} setAddingAt={setAddingAt} />
            case 2: return <SummaryResult pcf={pcf} setPcf={setPcf} />
            default:
                throw new Error('Step out of bounds. It should not happen')
        }
    }

    if (loading)
        return <Loader />
    return <div className={classes.editor}>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
            {titles.map(label => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <div className={classes.editorContent}>
            {renderStepContent()}
        </div>
        <StepNavigator activeStep={activeStep} canContinue={canContinue} next={next} previous={previous} reset={reset} save={save}
            showResult={showResult} calculate={calculate} scrollTo={scrollTo} />
    </div>

}
