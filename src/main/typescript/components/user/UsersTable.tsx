import React from 'react'
import { Roles } from '../../types/Roles'
import { User } from '../../types/User'
import BackendDataTable, { Urls } from '../util/data/BackendDataTable'
import { Cell } from '../util/data/DataTable'

interface ComponentProps {
    user: User
}

export default ({ user }: ComponentProps) => {

    const cells: Cell<User>[] = [
        { field: 'username', label: 'Benutzername', getValue: user => user.username },
        { field: 'name', label: 'Name', applyFilter: true, getValue: user => user.name, hidden: 'sm' },
        { field: 'email', label: 'Email', applyFilter: true, getValue: user => user.email, hidden: 'sm' }
    ]
    if (user.role === Roles.ADMIN.name)
        cells.push({ field: 'organization', label: 'Organisation', getValue: user => user.organization ? user.organization.name : '', hidden: 'xs' })
    cells.push(
        { field: 'role', label: 'Role', hidden: 'sm', getValue: user => {
            switch (user.role) {
                case Roles.ADMIN.name: return 'Administrator'
                case Roles.ORGANIZATION_ADMIN.name: return 'Organisationsadministrator'
                case Roles.USER.name: return 'Benutzer'
            }
        }}
    )

    const urls: Urls<User> = {
        createRoute: '/users/new',
        loadData: 'users',
        editRoute: user => `/users/${user.username}`,
        deleteData: user => `users/${user.username}`
    }

    return <BackendDataTable name='Benutzer' title='Benutzer' urls={urls} cells={cells} maxWidth={1200}/>

}
