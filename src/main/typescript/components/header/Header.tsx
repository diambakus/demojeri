import { AppBar, Drawer, IconButton, Link, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { AccountCircle as ProfileIcon, ExitToApp as LoginIcon, PowerSettingsNew as LogoutIcon, Menu as MenuIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { POST } from '../../backend'
import { Roles } from '../../types/Roles'
import { defaultUser, User } from '../../types/User'
import styles from './Header.jss'

interface ComponentProps {
    user: User
    setUser: (user: User) => void
}

export default ({ user, setUser }: ComponentProps) => {

    const classes = styles()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const history = useHistory()

    const isAdmin = () =>
        user.role === Roles.ADMIN.name

    const isOrgAdmin = () =>
        user.role === Roles.ORGANIZATION_ADMIN.name

    const navigate = (path: string) => {
        setMobileMenuOpen(false)
        history.push(path)
    }

    const renderMobileMenu = () => {
        if (!user.id)
            return null
        return <Drawer anchor='top' open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            <List>
                {!isAdmin() ?
                    <ListItem button onClick={() => navigate('/pcfs')}>
                        <ListItemText primary='Blogs' />
                    </ListItem>
                    : null}
                {isAdmin() || isOrgAdmin() || user.organization ?
                    <ListItem button onClick={() => navigate('/#')}>
                        <ListItemText primary='Funcionários' />
                    </ListItem>
                    : null}
                {isAdmin() || isOrgAdmin() || user.organization ?
                    <ListItem button onClick={() => navigate(isAdmin() ? '/organizations' : `/organizations/${user.organization.id}`)}>
                        <ListItemText primary={isAdmin() ? 'Organizacoes' : 'minha organizacao'} />
                    </ListItem>
                    : null}
                {isAdmin() || isOrgAdmin() ?
                    <ListItem button onClick={() => navigate('/users')}>
                        <ListItemText primary='Usuários' />
                    </ListItem>
                    : null}
            </List>
        </Drawer>
    }

    const renderNavigationItems = () => {
        if (!user.id)
            return null
        return <div className={classes.navigation}>
            <Typography variant='subtitle1' className={classes.desktopMenu}>
                {!isAdmin() ?
                    <Link className={classes.navLink} component={RouterLink} to={{ pathname: '/pcfs' }} color='inherit'>
                        Ihre Carbon Footprints
                    </Link>
                    : null}
                {isAdmin() || isOrgAdmin() || user.organization ?
                    <Link className={classes.navLink} component={RouterLink} to={{ pathname: isAdmin() ? '/organizations' : `/organizations/${user.organization.id}` }} color='inherit'>
                        {isAdmin() ? 'Organisationsverwaltung' : 'Ihre Organisation'}
                    </Link>
                    : null}
                {isAdmin() || isOrgAdmin() ?
                    <Link className={classes.navLink} component={RouterLink} to={{ pathname: '/users' }} color='inherit'>
                        Benutzerverwaltung
                    </Link>
                    : null}
            </Typography>
        </div>
    }

    const renderUserMenu = () => {
        if (!user.id)
            return <IconButton component={RouterLink} to='/login' color='inherit'>
                <LoginIcon />
            </IconButton>
        return <div>
            <IconButton component={RouterLink} to='/user/profile' color='inherit'>
                <ProfileIcon />
            </IconButton>
            <IconButton color='inherit' onClick={() => {
                POST('users/current/logout', null, () => {
                    localStorage.removeItem('authentication-token')
                    setUser(defaultUser)
                })
            }}>
                <LogoutIcon />
            </IconButton>
        </div>
    }

    return <AppBar className={classes.appBar}>
        <Toolbar>
            {user.id ?
                <IconButton color='inherit' onClick={() => setMobileMenuOpen(true)} className={classes.mobileMenu}>
                    <MenuIcon />
                </IconButton>
                : null}
            <Typography variant='h6'>
                <Link component={RouterLink} to='/' color='inherit'>DEMO</Link>
            </Typography>
            <div className={classes.navigation}>
                {renderNavigationItems()}
            </div>
            {renderUserMenu()}
            {renderMobileMenu()}
        </Toolbar>
    </AppBar >
}
