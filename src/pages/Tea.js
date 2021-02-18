import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import imgTea from '../assets/imgTea.jpg';
import CardsTeas from '../components/CardsTeas/CardsTeas';

const Tea = (props) => {
    return (
        <>
            <Header img={imgTea} title="Achetez vos thés favoris" />   
            <CardsTeas />
            <Footer />
        </>
    )
}

export default Tea;