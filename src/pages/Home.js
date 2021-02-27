import React from 'react';

import Header from '../components/Header/Header';
import News from '../components/News/News';
import Opinion from '../components/Opinion/Opinion';

import home from '../assets/header/home.jpg';


const Home = ({ addCart }) => {
    return (
        <>
            <Header background={home} title="C'est toujours l'heure du thé grâce aux tisanes fleuries"  />
            <News addCart={addCart} />
            blog
            <Opinion />
        </>
    )
}

export default Home;