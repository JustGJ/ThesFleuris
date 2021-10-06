import React from 'react';

import Header from '../components/Header/Header';
import News from '../components/News/News';
import Opinion from '../components/Opinion/Opinion';

import home from '../assets/header/home.jpg';
import '../App.css';

const Home = ({ isOpen, addCart, setCart, cart }) => {
    return (
        <div onClick={() => setCart(false)}>
            <Header
                background={home}
                title="C'est toujours l'heure du thé grâce aux tisanes fleuries"
            />
            <News addCart={addCart} isOpen={isOpen} cart={cart} setCart={setCart} />
            <Opinion />
        </div>
    );
};

export default Home;
