import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactState from '../Pure/contact_state';

//creacion de una instancia de la clase Contact usando la estructura establecida en contact_state.jsx

const ContactRender = () => {
    const contactoUno = new Contact('Ivan', 'Sarjanovich', 'ivansarja1997@gmail.com', true)

    return (
        <div>
            <h1>Detalles del contacto:</h1>
            <ContactState contact={ contactoUno }></ContactState>
        </div>
    );
}

export default ContactRender;
