
export interface Address {
    street: string
    number: string
    zip: string
    place: string
    country: string
}

export interface OrganizationDescriptor {
    id: number
    name: string
    address: Address
}

export interface Organization extends OrganizationDescriptor {
    logo: string
    phone: string
    email: string
    fax: string
    website: string
}

export const defaultOrganization: Organization = {
    id: 0,
    name: undefined,
    logo: undefined,
    phone: undefined,
    email: undefined,
    address: {
        street: undefined,
        number: undefined,
        zip: undefined,
        place: undefined,
        country: undefined
    },
    fax: undefined,
    website: undefined
}

export const toAddressString = (address: Address) => {
    return `${address.street} ${address.number}, ${address.zip} ${address.place}, ${address.country}`
}
