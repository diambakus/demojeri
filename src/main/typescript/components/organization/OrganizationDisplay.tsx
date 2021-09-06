import React from 'react'
import { Organization, toAddressString } from '../../types/Organization'
import Title from '../util/Title'
import styles from './OrganizationDisplay.jss'

interface ComponentProps {
    organization: Organization
}

export default ({ organization }: ComponentProps) => {

    const classes = styles()

    const renderRow = (label: string, value: string, first?: boolean) =>
        <p className={first ? classes.firstParagraph : null}><strong>{label}:</strong> {value}</p>

    return <form className={classes.form}>
        <Title caption lines>Ihre Organisation</Title>
        <div className={classes.card}>
            {organization.logo
                ? <img src={window.atob(organization.logo)} className={classes.logo} />
                : <img className={classes.defaultLogo}/>
            }
            <div>
                {renderRow('Name', organization.name, true)}
                {renderRow('Telefon', organization.phone)}
                {renderRow('Fax', organization.fax)}
                {renderRow('Email', organization.email)}
                {renderRow('Web', organization.website)}
                {renderRow('Adresse', toAddressString(organization.address))}
            </div>
        </div>
    </form>

}
