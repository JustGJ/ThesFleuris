import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Opinion from '../../components/Opinion/Opinion';
import imgIndex from '../../assets/imgIndex.jpg'
import CardsTeas from '../../containers/CardsTeas/CardsTeas';

const index = () => {
    return (
        <>
            <Header img={imgIndex} title="C'est toujours l'heure du thé grâce aux tisanes fleuries" />
            <CardsTeas />
            blog
            <Opinion />
            <Footer />
        </>
    )
}

export default index;