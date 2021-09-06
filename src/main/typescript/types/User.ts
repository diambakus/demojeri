import { Organization } from './Organization'
import { Roles } from './Roles'

export interface Credentials {
    username: string
    password: string
}

export interface User {
    username: string
    name: string
    email: string
    organization: Organization
    role?: string
    id?: number
}

export const defaultUser: User = {
    id: 0,
    username: undefined,
    name: undefined,
    email: undefined,
    organization: undefined,
    role: Roles.USER.name
}
