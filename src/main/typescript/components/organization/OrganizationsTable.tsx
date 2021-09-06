import React from 'react'
import { Organization } from '../../types/Organization'
import BackendDataTable, { Urls } from '../util/data/BackendDataTable'
import { Cell } from '../util/data/DataTable'

export default () => {

    const cells: Cell<Organization>[] = [
        { field: 'name', label: 'Name', applyFilter: true, getValue: organization => organization.name },
        { label: 'Phone', getValue: organization => organization.phone, hidden: 'sm' },
        { label: 'Fax', getValue: organization => organization.fax, hidden: 'sm' },
        { field: 'email', label: 'Email', applyFilter: true, getValue: organization => organization.email, hidden: 'xs' },
        { label: 'Web', getValue: organization => organization.website, hidden: 'sm' }
    ]

    const urls: Urls<Organization> = {
        createRoute: '/organizations/new',
        loadData: 'organizations',
        editRoute: organization => `/organizations/${organization.id}`,
        deleteData: organization => `organizations/${organization.id}`
    }

    return <BackendDataTable name='Organisation' title='Organisationen' urls={urls} cells={cells} maxWidth={1200} />

}
