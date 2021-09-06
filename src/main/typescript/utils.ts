import { Theme } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { PCF } from './types/PCF'

const NUMBER_FORMAT = new Intl.NumberFormat('de-DE')
export const formatNumber = value => NUMBER_FORMAT.format(value)
export const toScNotation = (value: number, fractionDigits: number) => value.toExponential(fractionDigits)

export const formatResult = (value: number, unit: string) => {
    if (unit === 'g')
        value = value * 1000
    return `${formatNumber(value)} ${unit}`
}

export const getResultUnit = (pcf: PCF): string => {
    const total = pcf.impactResults.find(i => i.key === 'total')
    const result = total ? total.amount : 0
    if (result < 1)
        return 'g'
    return 'kg'
}

export interface Token {
    token: string
    expires: number
}

export const handleImageUpload = (event, callback: (image) => void) => {
    event.preventDefault()
    const reader = new FileReader()
    const file = event.target.files[0]
    reader.onloadend = () => {
        const image = reader.result as any
        callback(image)
    }
    reader.readAsDataURL(file)
}

export const stringToBase64 = (str: string): string => {
    if (!str)
        return null
    return window.atob(str)
}

export const base64ToString = (base64str: string): string => {
    if (!base64str)
        return null
    return window.btoa(base64str)
}

export const setToken = (token: Token) => {
    localStorage.setItem('authentication-token', token.token)
    localStorage.setItem('authentication-token-expires', token.expires.toString())
}

export const getToken = () => {
    let token: string = localStorage.getItem('authentication-token')
    if (!token)
        return null
    const expires: number = parseInt(localStorage.getItem('authentication-token-expires'), undefined)
    if (!expires || expires < new Date().getTime()) {
        removeToken()
        return null
    }
    return token
}

export const removeToken = () => {
    localStorage.removeItem('authentication-token')
    localStorage.removeItem('authentication-token-expires')
}

export const getBreakpoint = (theme: Theme): Breakpoint => {
    const breakpoints: Breakpoint[] = ['xl', 'lg', 'md', 'sm']
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    for (let breakpoint of breakpoints)
        if (width >= theme.breakpoints.width(breakpoint))
            return breakpoint
    return 'xs'
}

export const addItem = <T>(array: T[], item: T, position: number) => 
    [...array.slice(0, position), item, ...array.slice(position)]

export const swapItems = <T>(array: T[], from: number, to: number): T[] => {
    if (from > to)
        [from, to] = [to, from]
    return [
        ...array.slice(0, from),
        array[to],
        ...array.slice(from + 1, to),
        array[from],
        ...array.slice(to + 1)
    ]
}

export const removeItem = <T>(array: T[], position: number): T[] =>
    [...array.slice(0, position), ...array.slice(position + 1)]

/**
 * We did estimate that each 45 characters occupy one line of the 'scope' field. 
 * So, to get to that number, we estimate that 7 out of the all 45 characters are 'W', also
 * 7 out of the all 45 characters are 'M' and the remains are others characters
 */
export const SCOPE_CHAR_LIMIT = 900

//https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid/2117523#2117523
export const uuidv4 = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}

export const getRandom = (min: number, max: number): number => {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

export function removeSpace(text: string): string{
    return text.replace(/\s/g, '')
}