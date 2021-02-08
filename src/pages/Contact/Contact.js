import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import imgContact from '../../assets/imgContact.jpg';

const Contact = (props) => {
    return (
        <>
            <Header img={imgContact} title="Contactez-nous"/>
            formulaire
            <Footer />
        </>
    )
}

export default Contact;