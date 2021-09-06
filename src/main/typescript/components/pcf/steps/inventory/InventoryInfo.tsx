import { Container, Grid, Paper, Step, StepButton, StepConnector, StepLabel, Stepper } from '@material-ui/core'
import { AddCircle, ArrowDownward, ArrowUpward, RemoveCircle } from '@material-ui/icons'
import React, { Fragment, useEffect, useState } from 'react'
import { ILevel, isOperationInputsCompleted, Operation, PCF, findItem, getTitle } from '../../../../types/PCF'
import { removeSpace } from '../../../../utils'
import { ScrollTo } from '../../../App'
import { operations as itemsOperations } from '../../data/AllItems'
import { operations as OPERATIONS } from '../../data/AllOperations'
import EditorLayout from '../EditorLayout'
import MultiSelect from '../general/MultiSelect'
import styles from './InventoryInfo.jss'
import InventoryList from './InventoryList'

type ComponentProps = {
    activeOperation: number
    pcf: PCF
    opSteps: string[]
    addingAt: number
    setAddingAt: (addAt: number) => void
    setPcf: (pcf: PCF) => void
    setActiveOperation: (activeOperation: number) => void
    addStep: (key: string, position: number, level: ILevel) => void
    deleteStep: (key: number) => void
    swapStep: (from: number, to: number) => void
    scrollTo: ScrollTo
}
const DEFAULTLEVELS: ILevel = { level1: -1, level2: -1, level3: -1, refId: '' }

export default ({ activeOperation, opSteps, pcf, addingAt, setPcf, setActiveOperation, addStep, deleteStep, swapStep, setAddingAt, scrollTo }: ComponentProps) => {

    const [level, setLevel] = useState<ILevel>(DEFAULTLEVELS)
    const classes = styles()

    useEffect(() => {
        if (activeOperation !== opSteps.length || level.level1 === -1)
            return
        if (level.level2 === -1 && findItem(itemsOperations, level.level1).children.length)
            return
        if (level.level2 !== -1 && level.level3 === -1 && findItem(findItem(itemsOperations, level.level1).children, level.level2).children.length)
            return
        const name = getTitle(itemsOperations, level)
        addStep(name, addingAt, level)
    }, [level])

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled) {
            let levels: ILevel = { ...DEFAULTLEVELS }
            if (activeOperation < opSteps.length) {
                levels = pcf.operationInputs.find((_, index) => (index === activeOperation)).selectType
            }
            setLevel(levels)
        }
        return () => { canceled = true }
    }, [activeOperation, pcf.operationInputs ? pcf.operationInputs.length : 0])

    const goTo = (step: number) => () => {
        setActiveOperation(step)
        if (step === opSteps.length) {
            setLevel(DEFAULTLEVELS)
            setAddingAt(step)
            scrollTo('top')
        } else if (step == 0)
            scrollTo('bottom')
    }

    const addAt = (position: number) => {
        if (position !== opSteps.length) {
            setActiveOperation(opSteps.length)
            setAddingAt(position)
        }
    }

    const getStepper = () =>
        <Container>
            <Stepper activeStep={activeOperation} orientation='vertical' nonLinear className={classes.stepper} connector={<StepConnector className={classes.connector} />}>
                {
                    opSteps.map((item, index) => (
                        <Step key={index} completed={isOperationInputsCompleted(pcf, index, itemsOperations)} classes={{ root: classes.stepButton }}>
                            {index !== 0 ?
                                <StepButton onClick={() => swapStep(index, index - 1)} key={index + '+up'} icon={<ArrowUpward />} classes={{ root: classes.moveBtn }} />
                            : null}
                            <StepButton onClick={() => addAt(index)} key={index + '+add'} icon={<AddCircle />} classes={{ root: classes.addBtn }} />
                            <StepButton onClick={goTo(index)} key={index}>
                                <StepLabel className={classes.stepLabel}>{item}</StepLabel>
                            </StepButton>
                            <StepButton onClick={() => deleteStep(index)} key={index + '-del'} icon={<RemoveCircle />} classes={{ root: classes.removeBtn }} />
                            {index !== opSteps.length - 1 ?
                                <StepButton onClick={() => swapStep(index, index + 1)} key={index + '+down'} icon={<ArrowDownward />} classes={{ root: classes.moveBtn }} />
                            : null}
                        </Step>
                    ))
                }
                <Step key={opSteps.length}>
                    <StepButton onClick={goTo(opSteps.length)} icon={<AddCircle style={{ color: 'green' }} />} key={opSteps.length}
                        id={`${opSteps.length}-Id`}>
                        <StepLabel className={classes.stepLabel}>Hinzufügen</StepLabel>
                    </StepButton>
                </Step>
            </Stepper>
        </Container>

    const getOperation = (activeIndex: number): Operation => {
        return OPERATIONS.find(item => removeSpace(item.title.toLowerCase()) === removeSpace(opSteps[activeIndex].toLowerCase()))
    }

    const getContents = () => {
        if (activeOperation < opSteps.length)
            return (<Fragment>
                {renderMultiSelect()}
                <InventoryList pcf={pcf} setPcf={setPcf} operation={getOperation(activeOperation)} activeOperation={activeOperation} />
            </Fragment>)
        if (activeOperation === opSteps.length)
            return (<Fragment>
                {renderMultiSelect()}
            </Fragment>)
        return null
    }

    const renderMultiSelect = () => {
        return (
            <Container component={Paper} maxWidth={false} className={classes.multiSelectContainer}>
                <Grid container spacing={1} className={classes.multiselect}>
                    <MultiSelect items={itemsOperations} orientation='horizontal' selectType={level} setSelectType={setLevel}
                        disabled={activeOperation !== opSteps.length} />
                </Grid>
            </Container>
        )
    }

    return <EditorLayout sidebar={getStepper()} >
        {getContents()}
    </EditorLayout>
}
