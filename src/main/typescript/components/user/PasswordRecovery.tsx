import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TextInput from '../util/TextInput'
import styles from './PasswordRecovery.jss'
import Title from '../util/Title'
import { POST } from '../../backend'

interface Props {
    setAlert: (value: string) => void
}

export default ({ setAlert }: Props) => {

    const classes = styles()
    const [email, setEmail] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        POST('public/reset-password', { email }, () => {
            setAlert('Passwort erfolgreich zurückgesetzt.')
        })
    }

    return <form className={classes.form}>
        <Title>Password zurücksetzen</Title>
        <Typography variant='subtitle1'>Bitte geben Sie Ihre Email Adresse an um Ihr Passwort zurückzusetzen. Sie erhalten eine Email mit dem neuen Passwort.</Typography>
        <TextInput autoFocus id='email' label='Email' value={email} setValue={setEmail}/>
        <Button fullWidth type='submit' variant='contained' color='primary' onClick={onSubmit}>Anfrage senden</Button>
    </form>

}
