import { getToken, removeToken } from './utils'

const BASE_QUERY = '/api/'

export interface FieldError {
    key?: string
    field?: string
}

export const getErrorMessage = (error: FieldError, targetField: string) => {
    console.debug(error)
    if (!error)
        return null
    if (error.field !== targetField)
        return null
    if (error.key === 'invalid')
        return 'Ungültige Eingabe'
    if (error.key === 'missing')
        return 'Fehlende Eingabe'
    return 'Unerwarteter Fehler'
}

export const GET = async <T>(endpoint: string, onSuccess?: (json: T) => void, onError?: (error?: FieldError) => void): Promise<void> =>
    ajax('GET', endpoint, null, 'json', onSuccess, onError)

export const POST = async <T>(endpoint: string, data?: any, onSuccess?: (json: T) => void, onError?: (error?: FieldError) => void): Promise<void> =>
    ajax('POST', endpoint, data, 'json', onSuccess, onError)

export const PUT = async <T>(endpoint: string, data?: any, onSuccess?: (json: T) => void, onError?: (error?: FieldError) => void): Promise<void> =>
    ajax('PUT', endpoint, data, 'json', onSuccess, onError)

export const PATCH = async <T>(endpoint: string, data?: any, onSuccess?: (json: T) => void, onError?: (error?: FieldError) => void): Promise<void> =>
    ajax('PATCH', endpoint, data, 'json', onSuccess, onError)

export const DELETE = async <T>(endpoint: string, onSuccess?: (json: T) => void, onError?: (error?: FieldError) => void): Promise<void> =>
    ajax('DELETE', endpoint, null, 'json', onSuccess, onError)

export const FETCH = (method: string, endpoint: string, data?: any, dataType: 'json' | 'form' = 'json') =>
    fetch(BASE_QUERY + endpoint, {
        method,
        headers: appendAuth(getHeader(method, dataType)),
        body: data ? dataType === 'json' ? JSON.stringify(data) : data : null
    })

const ajax = async <T>(method: string, endpoint: string, data?: any, dataType?: 'json' | 'form', onSuccess?: (json: T) => void, onError?: (error?: FieldError) => void): Promise<void> =>
    FETCH(method, endpoint, data, dataType)
        .then(response => {
            if (response.status < 300 && onSuccess)
                response.json().then(json => onSuccess(json))
            if (response.status === 401) {
                removeToken()
                window.location.href = '/login'
            } else if (response.status === 403)
                window.location.href = '/forbidden'
            else if (response.status === 404)
                window.location.href = '/not-found'
            else if (response.status === 400 && onError)
                response.json().then(json => onError(json))
        })

const getHeader = (method: string, dataType: 'json' | 'form' = 'json') => {
    switch (method) {
        case 'GET':
        case 'DELETE':
            return {}
        case 'POST':
        case 'PUT':
            return dataType === 'json' ? {
                'Content-Type': 'application/json'
            } : {}
        case 'PATCH':
            return {
                'Content-Type': 'application/merge-patch+json'
            }
    }
}

const appendAuth = (headers: HeadersInit) => {
    const token = getToken()
    if (!token)
        return headers
    return { ...headers, 'Authorization': 'Bearer ' + token }
}
