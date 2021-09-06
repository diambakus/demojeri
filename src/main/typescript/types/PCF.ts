import { Organization } from './Organization'

export interface UserDescriptor {
    id: number
    name: string
}

export interface Provider {
    refId: string
    name: string
}

export type ExchangeType = 'material' | 'transport' | 'power' | 'emission' | 'gas' | 'recyclable'
export interface ExchangeDescriptor {
    no: number
    module: string
    product: string
    unit: string
    amount: number
    type: ExchangeType
    explanation?: string
    providers?: Provider[]
}

export interface OperationInputs {
    id: number
    no: number
    calculationInputs: CalculationInput[]
    selectType: ILevel
    loss: number
    position: number
}

export interface CalculationInput {
    id: number
    no: number
    module: string
    amount: number
    type: ExchangeType
    providerRefId?: string
}

export interface DescriptiveInput {
    id: number
    section: string
    name: string
    value: string
}

export interface ImpactResult {
    key: string
    amount: number
}

export interface ILevel {
    level1: number
    level2?: number
    level3?: number
    refId: string
}

export interface PCF {
    id: number
    creationDate: string
    user: UserDescriptor
    organization: Organization
    declaredProduct: string
    gwp: number
    electricityMix: string
    electricityMixQtty: number
    gasMix: string
    gasMixQtty: number
    compressedAir: string
    compressedAirQtty: number
    operationInputs: OperationInputs[]
    semiProduct: string
    semiProductQtty: number
    impactResults: ImpactResult[]
    selectType: ILevel
    productWeight: number
}

export const defaultPCF: PCF = {
    id: 0,
    creationDate: '',
    user: undefined,
    organization: undefined,
    declaredProduct: '',
    gwp: -1,
    electricityMix: undefined,
    gasMix: undefined,
    compressedAir: undefined,
    compressedAirQtty: 0,
    electricityMixQtty: 0,
    gasMixQtty: 0,
    operationInputs: [],
    semiProduct: undefined,
    semiProductQtty: undefined,
    impactResults: [],
    selectType: {
        level1: -1,
        level2: -1,
        level3: -1,
        refId: undefined
    },
    productWeight: 0
}

export interface Operation {
    no: number
    title: string
    loss: number
    exchanges: ExchangeDescriptor[]
}

export interface SemiProduct {
    name: string
    providers?: Provider[]
}

export interface GwpResult {
    key: string
    result: number
}

export interface Item {
    label: string
    id: number
    refId?: string
    children?: Item[]
}

export interface ParEntry<T> {
    key: string
    value?: T
}

export const findItem = (items: Item[], level: number): Item => {
    return items.find(item => item.id === level)
}

export const getTitle = (items: Item[], level: ILevel): string => {
    const { level1, level2, level3 } = level
    let name = findItem(items, level1).label
    if (level2 !== -1) {
        name += ', ' + findItem(findItem(items, level1).children, level2).label
        if (level3 !== -1) {
            name += ', ' + findItem(findItem(findItem(items, level1).children, level2).children, level3).label
        }
    }
    return name
}

export const isOperationInputsCompleted = (pcf: PCF, indexP: number, items: Item[]): boolean => 
    isCompleted(pcf.operationInputs.find((_, index) => index === indexP), items)

export const isOperationsInputsCompleted = (pcf: PCF, activeOperation: number): boolean => {
    if (!pcf.operationInputs || !pcf.operationInputs.length)
        return false
    if (activeOperation < pcf.operationInputs.length - 1)
        return true
    return true
}

const isCompleted = (operationInput: OperationInputs, items: Item[]): boolean => {
    if (!operationInput)
        return false
    if (!getTitle(items, operationInput.selectType).length)
        return false
    if (operationInput.loss !== -1 && operationInput.loss !== 0)
        return true
    return !!operationInput.calculationInputs.find(item => item.amount !== 0)
}

const isFilledUp = (pcf: PCF, idField: keyof PCF) => {
    if (pcf[idField] === '')
        return true
    return !!pcf[idField]
}

export const areFilledUp = (pcf: PCF): boolean => {
    if (!pcf.declaredProduct || !pcf.productWeight)
        return false
    if (!isFilledUp(pcf, 'electricityMix'))
        return false
    if (!isFilledUp(pcf, 'gasMix'))
        return false
    if (!isFilledUp(pcf, 'compressedAir'))
        return false
    return true
}