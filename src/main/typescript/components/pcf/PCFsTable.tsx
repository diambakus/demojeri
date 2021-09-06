import React, { useState } from 'react'
import { PCF } from '../../types/PCF'
import Loader from '../loader/Loader'
import BackendDataTable, { Urls } from '../util/data/BackendDataTable'
import { Action, Cell } from '../util/data/DataTable'

export default () => {

    const [loading, setLoading] = useState(false)

    const getCurrentDate = () =>
        new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date())

    const cells: Cell<PCF>[] = [
        { field: 'declaredProduct', label: 'Produktname', applyFilter: true, getValue: pcf => pcf.declaredProduct },
        { field: 'creationDate', label: 'Erstellungsdatum', getValue: pcf => pcf.creationDate ? pcf.creationDate : getCurrentDate(), hidden: 'xs' },
    ]

    const urls: Urls<PCF> = {
        createRoute: '/pcfs/new',
        loadData: 'pcfs',
        editRoute: pcf => `/pcfs/${pcf.id}`,
        deleteData: pcf => `pcfs/${pcf.id}`,
        copyData: pcf => `pcfs/copy/${pcf.id}`
    }

    const actions: Action<PCF>[] = [
    ]

    return <div>
        {loading ? <Loader/> : null}
        <BackendDataTable name='PCF' title='Ihre Carbon Footprints' urls={urls} cells={cells} defaultSortBy='creationDate' defaultSortDirection='DESCENDING' actions={actions} maxWidth={1200}/>
    </div>
}
