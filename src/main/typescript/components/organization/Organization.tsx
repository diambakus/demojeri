import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { GET, PATCH, POST } from '../../backend'
import { defaultOrganization, Organization } from '../../types/Organization'
import { Roles } from '../../types/Roles'
import { User } from '../../types/User'
import { base64ToString, handleImageUpload, stringToBase64 } from '../../utils'
import Loader from '../loader/Loader'
import Align from '../util/Align'
import Form from '../util/Form'
import Grid from '../util/Grid'
import ModelInput from '../util/ModelInput'
import Title from '../util/Title'
import styles from './Organization.jss'
import OrganizationDisplay from './OrganizationDisplay'

interface ComponentProps {
    id?: string
    user: User
    setUser: (user: User) => void
    setAlert: (message: string) => void
}

export default ({ id, user, setUser, setAlert }: ComponentProps) => {

    const classes = styles()
    const history = useHistory()
    const [organization, setOrganization] = useState<Organization>(defaultOrganization)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(!!id)

    useEffect(() => {
        if (!id)
            return
        let canceled = false
        GET(`organizations/${id}`, (response: Organization) => {
            if (canceled || !response)
                return
            setOrganization(response)
            setLoading(false)
        })
        return () => canceled = true
    }, [])
    const isOrgAdmin = user.role === Roles.ORGANIZATION_ADMIN.name && organization && user.organization && organization.id === user.organization.id
    const viewMode = !(organization && !organization.id) && !isOrgAdmin && user.role !== Roles.ADMIN.name

    const onSubmit = event => {
        event.preventDefault()
        setError(null)
        if (organization.id)
            PATCH(`organizations/${id}`, organization, () => {
                if (isOrgAdmin)
                    setUser({ ...user, organization })
                setAlert('Organisation erfolgreich gespeichert!')
            }, setError)
        else
            POST('organizations', organization, (response: Organization) => {
                if (isOrgAdmin)
                    setUser({ ...user, organization: response })
                setAlert('Organisation erfolgreich erstellt!')
                history.push(`/organizations/${response.id}`)
            }, setError)
    }

    const onImageUpload = event => {
        handleImageUpload(event, image => {
            setOrganization({ ...organization, logo: base64ToString(image) })
        })
    }

    if (loading)
        return <Loader />
    if (viewMode)
        return <OrganizationDisplay organization={organization} />
    return <div className={classes.organization}>
        <div className={classes.header}>
            <Title grow lines>{id ? `Organisation: ${organization.name}` : 'Neue Organisation'}</Title>
            <div className={classes.uploadButtonContainer}>
                {organization.logo ?
                    <Button variant='contained' color='secondary' component='label' className={classes.uploadButton} onClick={() => setOrganization({ ...organization, logo: null })}>Bild entfernen</Button>
                    : null}
                <Button variant='contained' color='primary' component='label' className={classes.uploadButton}>
                    Neues Bild hochladen
                    <input type='file' onChange={onImageUpload} className={classes.uploadInput} name='logo' />
                </Button>
            </div>
            {organization.logo
                ? <img src={stringToBase64(organization.logo)} className={classes.logo} />
                : <img className={classes.defaultLogo} />
            }
        </div>
        <Form>
            <Title caption lines small>Generelle Informationen</Title>
            <Grid columns={{ xs: 1, sm: 2, md: 3 }}>
                <ModelInput autoFocus id='name' label='Name' model={organization} error={error} setModel={setOrganization} />
                <ModelInput id='phone' label='Telefon' model={organization} error={error} setModel={setOrganization} />
                <ModelInput id='fax' label='Fax' model={organization} error={error} setModel={setOrganization} />
            </Grid>
            <Grid columns={{ xs: 1, sm: 2 }}>
                <ModelInput id='email' label='Email' model={organization} error={error} setModel={setOrganization}/>
                <ModelInput id='website' label='Web' model={organization} error={error} setModel={setOrganization}/>
            </Grid>
            <Title caption lines small>Addresse</Title>
            <Grid columns={{ xs: 1, sm: 2 }}>
                <ModelInput id='street' label='Straße' model={organization.address} error={error} setModel={address => setOrganization({ ...organization, address })} />
                <ModelInput id='number' label='Nummer' model={organization.address} error={error} setModel={address => setOrganization({ ...organization, address })} />
            </Grid>
            <Grid columns={{ xs: 1, sm: 2, md: 3 }}>
                <ModelInput id='zip' label='PLZ' model={organization.address} error={error} setModel={address => setOrganization({ ...organization, address })} />
                <ModelInput id='place' label='Stadt' model={organization.address} error={error} setModel={address => setOrganization({ ...organization, address })} />
                <ModelInput id='country' label='Land' model={organization.address} error={error} setModel={address => setOrganization({ ...organization, address })} />
            </Grid>
            <Align position='end'>
                <Button type='submit' variant='contained' color='primary' onClick={onSubmit}>Speichern</Button>
            </Align>
        </Form>
    </div>

}
