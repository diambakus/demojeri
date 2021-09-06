import { Button, Link, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { GET, POST } from '../../backend'
import { User } from '../../types/User'
import { setToken, Token } from '../../utils'
import TextInput from '../util/TextInput'
import Title from '../util/Title'
import styles from './Login.jss'

interface ComponentProps {
    setUser: (user: User) => void
}

export default ({ setUser }: ComponentProps) => {

    const classes = styles()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()
        setError(false)
        POST('public/login', { username, password }, (response: Token) => {
            if (!response || !response.token)
                return
            setToken(response)
            GET('users/current', setUser)
        }, () => setError(true))
    }

    return <form className={classes.form}>
        <Title>Bem vindo a DEMO</Title>
        {error ?
            <Typography variant='caption' color='error'>Ungültiger Benutzername oder Passwort</Typography>
            : null}
        <TextInput autoFocus id='username' label='Nome do usuário' value={username} setValue={setUsername} />
        <TextInput type='password' label='Palavra passe' id='password' value={password} setValue={setPassword} />
        <Button fullWidth type='submit' variant='contained' color='primary' onClick={onSubmit}>ENTRAR</Button>
        <Link variant='body2' component={RouterLink} to='/password-recovery'>Esqueceu a palavra passe?</Link>
    </form>

}
