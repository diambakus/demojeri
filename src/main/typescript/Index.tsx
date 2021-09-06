import { CssBaseline } from '@material-ui/core'
import { createGenerateClassName, jssPreset } from '@material-ui/styles'
import { create } from 'jss'
import React from 'react'
import ReactDOM from 'react-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import { BrowserRouter } from 'react-router-dom'
import { GET } from './backend'
import App from './components/App'
import { defaultUser, User } from './types/User'
import { getToken } from './utils'

const jss: any = create(jssPreset())
jss.options.insertionPoint = document.getElementById('jss-insertion-point')
jss.options.createGenerateClassName = createGenerateClassName
jss.options.generateClassName = createGenerateClassName()

const render = (component: JSX.Element) =>
    ReactDOM.render(component, document.getElementById('root'))

const renderDev = (app: JSX.Element) => {
    const AppContainer = require('react-hot-loader').AppContainer
    render(
        <AppContainer>
            {wrapApp(app)}
        </AppContainer>
    )
}

const wrapApp = (app: JSX.Element) =>
    <JssProvider jss={jss}>
        <CssBaseline>
            <BrowserRouter>
                {app}
            </BrowserRouter>
        </CssBaseline>
    </JssProvider>

const init = async (initialUser: User) => {
    if (process.env.NODE_ENV === 'production') {
        render(wrapApp(<App initialUser={initialUser}/>))
        return
    }
    renderDev(<App initialUser={initialUser}/>)
    if (!module.hot)
        return
    module.hot.accept('./components/App', async () => {
        const NextApp = require('./components/App').default
        renderDev(<NextApp initialUser={initialUser} />)
    })
}

const token = getToken()
if (!token)
    init(defaultUser)
else
    GET('users/current', init)
