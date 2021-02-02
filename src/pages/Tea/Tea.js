import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/Background/Background';
import bgTea from '../../assets/bgTea.jpg';

const Tea = (props) => {
    return (
        <>
            <Navbar />
            <Background img={bgTea} title="Achetez vos thés favoris" />        
        </>
    )
}

export default Tea;