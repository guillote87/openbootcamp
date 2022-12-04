import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contacts}) => {
    return (
        <div>
            <h1>Nombre: {contacts.name}</h1>
            <h2>Apellido: {contacts.lastName}</h2>
            <h2>Email: {contacts.email}</h2>
            <h2>Estado: {contacts.connected ? "Contacto En Línea": "Contacto No Disponible"}</h2>
        </div>
    )
}

ContactComponent.propTypes = {
    contacts: PropTypes.instanceOf(Contact)
}

export default ContactComponent
