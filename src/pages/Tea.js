import React from 'react';

import Header from '../components/Header/Header';

import tea from '../assets/header/Tea.jpg';


const Tea = (props) => {
    return (
        <>
            <Header background={tea} title="Achetez vos thés favoris" />   
        </>
    )
}

export default Tea;