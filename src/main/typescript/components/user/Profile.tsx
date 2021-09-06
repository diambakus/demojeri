import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { FieldError, GET, PATCH, POST } from '../../backend'
import { Organization } from '../../types/Organization'
import { Roles } from '../../types/Roles'
import { defaultUser, User } from '../../types/User'
import Loader from '../loader/Loader'
import Align from '../util/Align'
import DropDown from '../util/DropDown'
import Form from '../util/Form'
import Grid from '../util/Grid'
import ModelInput from '../util/ModelInput'
import TextInput from '../util/TextInput'
import Title from '../util/Title'
import styles from './Profile.jss'
import { SearchResult } from '../../types/SearchResult'

/* Either specify 'username' for other users or supply the current user via 'user' */
interface ComponentProps {
    currentUser: User
    username?: string
    user?: User
    setUser?: (user: User) => void
    setAlert: (message: string) => void
}

export default ({ username, currentUser, user, setUser, setAlert }: ComponentProps) => {

    const classes = styles()
    const history = useHistory()
    const [profile, setProfile] = useState<User>(user || defaultUser)
    const [organizations, setOrganizations] = useState<Organization[]>([])
    const [loadingProfile, setLoadingProfile] = useState(!user)
    const [loadingOrganizations, setLoadingOrganizations] = useState(currentUser.role === Roles.ADMIN.name)
    const [error, setError] = useState<FieldError>()
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')
    const persisted = !!(username || user.username)

    useEffect(() => {
        let canceled = false
        if (username)
            GET(`users/${username}`, (response: User) => {
                if (canceled || !response)
                    return
                setProfile(response)
                setLoadingProfile(false)
            })
            if (currentUser.role === Roles.ADMIN.name)
                GET('organizations?page=0&sortBy=name', (response: SearchResult<Organization>) => {
                    if (canceled || !response)
                        return
                    setOrganizations(response.data)
                    setLoadingOrganizations(false)
                })
        return () => canceled = true
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()
        setError(null)
        if (persisted)
            PATCH(`users/${profile.username}`, profile, (user: User) => {
                if (setUser)
                    setUser(user)
                setAlert('Profil erfolgreich gespeichert!')
            }, setError)
        else
            POST('users', profile, () => {
                setAlert('Profil erfolgreich erstellt!')
                history.push(`/users/${profile.username}`)
            }, setError)
    }

    const onSubmitPass = (event) => {
        event.preventDefault()
        setError(null)
        PATCH(`users/${profile.username}/password`, { newPassword, newPasswordConfirmation }, () => {
            setNewPassword('')
            setNewPasswordConfirmation('')
            setAlert('Passwort erfolgreich geändert!')
        }, setError)
    }

    if (loadingProfile || loadingOrganizations)
        return <Loader/>
    return <div className={classes.profile}>
        <Title lines>{persisted ? `Benutzer: ${profile.username}` : 'Neuer Benutzer'}</Title>
        <Form>
            {!persisted
                ? <ModelInput autoFocus id='username' label='Benutzername' helperText='Der Benutzername muss mindestens vier Zeichen lang sein, es sind Groß- und Kleinbuchstaben sowie Zahlen und Unterstriche erlaubt' model={profile} error={error} setModel={setProfile}/>
                : <Title caption lines small>Generelle Informationen</Title>
            }
            <Grid columns={{ xs: 1, sm: 2 }}>
                <ModelInput autoFocus={persisted} id='name' label='Name' model={profile} error={error} setModel={setProfile}/>
                <ModelInput id='email' label='Email' model={profile} error={error} setModel={setProfile}/>
            </Grid>
            {currentUser.role === Roles.ADMIN.name || currentUser.role === Roles.ORGANIZATION_ADMIN.name ?
                <Grid columns={{ xs: 1, sm: currentUser.role === Roles.ADMIN.name && currentUser.id !== profile.id ? 2 : 1 }} className={classes.dropDownContainer}>
                    {currentUser.role === Roles.ADMIN.name ?
                        <DropDown displayEmpty error={error} id='organization' label='Organisation' value={profile.organization ? profile.organization.id : ''}
                            items={organizations.map(organization => ({ value: organization.id, label: organization.name }))}
                            onChange={e => setProfile({ ...profile, organization: organizations.find(organization => organization.id === e.target.value) })}/>
                    : null}
                    {currentUser.id !== profile.id ?
                        <DropDown id='role' error={error} label='Role' value={profile.role}
                            items={Object.keys(Roles).filter(role => currentUser.role === Roles.ADMIN.name || Roles[role] !== Roles.ADMIN).map(role => ({ value: Roles[role].name, label: Roles[role].label }))}
                            onChange={e => setProfile({ ...profile, role: e.target.value as string })}/>
                    : null}
                </Grid>
            : null}
            <Align position='end'>
                <Button type='submit' variant='contained' color='primary' onClick={onSubmit}>Speichern</Button>
            </Align>
        </Form>
        {persisted ?
            <Form>
                <Title caption lines small>Passwort</Title>
                <Grid columns={{ xs: 1, sm: 2 }}>
                    <TextInput type='text' id='newPassword' label='Neues Passwort' helperText='Das Passwort muss mindestens acht Zeichen lang sein und mindestens je einen Groß- und Kleinbuchstaben sowie eine Zahl beinhalten' value={newPassword} error={error} setValue={setNewPassword}/>
                    <TextInput type='text' id='newPasswordConfirmation' label='Neues Passwort wiederholen' value={newPasswordConfirmation} error={error} setValue={setNewPasswordConfirmation}/>
                </Grid>
                <Align position='end'>
                    <Button type='submit' variant='contained' color='primary' onClick={onSubmitPass}>Speichern / Ändern</Button>
                </Align>
            </Form>
        : null }
    </div>

}
