import React from 'react';

import Header from '../components/Header/Header';
import TeaCards from '../components/TeaCards/TeaCards';

import tea from '../assets/header/Tea.jpg';


const Tea = ({ addCart }) => {
    return (
        <>
            <Header background={tea} title="Achetez vos thés favoris" />   
            <TeaCards addCart={addCart} />
        </>
    )
}

export default Tea;