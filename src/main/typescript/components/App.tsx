import { ThemeProvider } from '@material-ui/core'
import classnames from 'classnames'
import React, { useState } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { defaultUser, User } from '../types/User'
import ErrorPage from './40x'
import styles from './App.jss'
import Header from './header/Header'
import Organization from './organization/Organization'
import OrganizationsTable from './organization/OrganizationsTable'
import theme from './Theme'
import Login from './user/Login'
import PasswordRecovery from './user/PasswordRecovery'
import Profile from './user/Profile'
import UsersTable from './user/UsersTable'
import Alert from './util/Alert'
import PCFsTable from './pcf/PCFsTable'
import PCFEditor from './pcf/PCFEditor'
import Welcome from './user/Welcome'

interface ComponentProps {
    initialUser: User
}

export type ScrollTo = (where: 'top' | 'bottom') => void

export default ({ initialUser }: ComponentProps) => {

    const loginRoutes = ['/login', '/password-recovery']
    const classes = styles()
    const [user, setUser] = useState<User>(initialUser)
    const [alert, setAlert] = useState('')
    const location = useLocation()
    const route = location.pathname
    const isLoginRoute = loginRoutes.indexOf(route) !== -1
    const isCreatePcfRoute = route.indexOf('/pcfs/') === 0 && route.length > 6

    const scrollId = 'scroll-container'
    const scrollTo: ScrollTo = (where) => {
        const container = document.getElementById(scrollId)
        container.scrollTo({
            top: where === 'top' 
                ? 0
                : container.scrollHeight,
            behavior: 'smooth'
        })
    }

    if (!user.id && !isLoginRoute)
        return <Redirect to='/login'/>
    if (user.id && route === '/login')
        return <Redirect to='/'/>
    return <ThemeProvider theme={theme}>
        <Alert message={alert} setMessage={setAlert}/>
        <Header user={user} setUser={setUser}/>
        <main id={scrollId} className={classnames(classes.main, isLoginRoute && classes.mainBg)}>
            <div className={isLoginRoute ? classes.centered : isCreatePcfRoute ? classes.content : classes.contentWithMargin}>
                <Switch>
                    <Route exact path='/' render={() => <Welcome />}/>
                    <Route exact path='/login' render={() => <Login setUser={setUser}/>}/>
                    <Route exact path='/password-recovery' render={() => <PasswordRecovery setAlert={setAlert}/>}/>
                    <Route exact path='/user/profile' render={() => <Profile key={user.username} currentUser={user} user={user} setUser={setUser} setAlert={setAlert}/>}/>
                    <Route exact path='/users' render={() => <UsersTable user={user}/>}/>
                    <Route exact path='/users/new' render={() => <Profile key={0} currentUser={user} user={defaultUser} setAlert={setAlert}/>}/>
                    <Route exact path='/users/:username' render={(props) => <Profile key={props.match.params.username} currentUser={user} username={props.match.params.username} setAlert={setAlert}/>}/>
                    <Route exact path='/organizations' render={() => <OrganizationsTable/>}/>
                    <Route exact path='/organizations/new' render={() => <Organization user={user} setUser={setUser} setAlert={setAlert}/>}/>
                    <Route exact path='/organizations/:id' render={(props) => <Organization user={user} setUser={setUser} id={props.match.params.id} setAlert={setAlert}/>}/>
                    <Route exact path='/pcfs' render={() => <PCFsTable/>}/>
                    <Route exact path='/pcfs/new' render={() => <PCFEditor currentUser={user} setAlert={setAlert} scrollTo={scrollTo}/>}/>
                    <Route exact path='/pcfs/:id' render={(props) => <PCFEditor id={props.match.params.id} currentUser={user} setAlert={setAlert} scrollTo={scrollTo}/>}/>
                    <Route exact path='/forbidden' render={() => <ErrorPage status={403}/>}/>
                    <Route render={() => <ErrorPage status={404}/>}/>
                </Switch>
            </div>
        </main>
    </ThemeProvider>

}
