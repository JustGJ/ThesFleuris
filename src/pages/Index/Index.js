import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Opinion from '../../components/Opinion/Opinion';
import imgIndex from '../../assets/imgIndex.jpg'

const index = () => {
    return (
        <>
            <Header img={imgIndex} title="C'est toujours l'heure du thé grâce aux tisanes fleuries" />
            cards 
            blog
            <Opinion />
            <Footer />
        </>
    )
}

export default index;