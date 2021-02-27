import React from 'react';
import hibiscus from '../../assets/teas/hibiscus.png';
import camomille from '../../assets/teas/camomille.png';
import framboise from '../../assets/teas/framboise.png';
import romarin from '../../assets/teas/romarin.png';
import earlGrey from '../../assets/teas/earlGrey.png';
import lavande from '../../assets/teas/lavande.png';
import amande from '../../assets/teas/amande.png';
import rose from '../../assets/teas/rose.png';
import menthe from '../../assets/teas/mint.png';

import TeaCard from './TeaCard/TeaCard';

import classes from './TeaCards.module.css';





const TeaCards = ({ addCart }) => {

    const teas = [
        {id: 1, imgSrc: hibiscus, name: "Hibiscus", price: 7.00, quantity: 1},
        {id: 3, imgSrc: camomille, name: "Camomille", price: 8.00, quantity: 1},
        {id: 2, imgSrc: framboise, name: "Framboise", price: 8.00, quantity: 1},
        {id: 1, imgSrc: romarin, name: "Romarin", price: 5.00, quantity: 1},
        {id: 2, imgSrc: earlGrey, name: "Earl Grey", price: 6.00, quantity: 1},
        {id: 3, imgSrc: lavande, name: "Lavande", price: 7.00, quantity: 1},
        {id: 1, imgSrc: amande, name: "Amande", price: 15.00, quantity: 1},
        {id: 2, imgSrc: rose, name: "Rose", price: 13.00, quantity: 1},
        {id: 3, imgSrc: menthe, name: "Menthe", price: 15.00, quantity: 1}      
    ]

    return (
        <>
             {
            teas.map(tea => 
                    <div key={tea.id} className={classes.cardTea} >
                        <TeaCard tea={tea} addCart={addCart}      
                        />
                    </div>    
                ) 
            }   
        </>
    );
};

export default TeaCards;