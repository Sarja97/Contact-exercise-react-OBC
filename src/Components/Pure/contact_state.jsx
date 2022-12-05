import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

//estructura de renderizacion de datos del contacto

const ContactState = ( { contact } ) => {

    return (
        <div>

            <h2>Nombre: { contact.name }</h2>
            <h2>Apellido: { contact.secname }</h2>

            <h3>Email: { contact.email }</h3>

            <h3>Estado: { contact.connected ? "Contacto En Linea" : "Contacto No Disponible"}</h3>
            
        </div>
    );
};


ContactState.propTypes = {
    contact: PropTypes.instanceOf( Contact ) 
};


export default ContactState;
