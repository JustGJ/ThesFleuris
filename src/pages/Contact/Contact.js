import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/Background/Background';
import bgContact from '../../assets/bgContact.jpg';

const Contact = (props) => {
    return (
        <>
            <Navbar />
            <Background img={bgContact} title="Contactez-nous" /> 
        </>
    )
}

export default Contact;