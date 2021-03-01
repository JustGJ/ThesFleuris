import React, { useState } from 'react';
import hibiscus from '../../assets/teas/hibiscus.png';
import camomille from '../../assets/teas/camomille.png';
import framboise from '../../assets/teas/framboise.png';
import romarin from '../../assets/teas/romarin.png';
import earlGrey from '../../assets/teas/earlGrey.png';
import lavande from '../../assets/teas/lavande.png';
import amande from '../../assets/teas/amande.png';
import rose from '../../assets/teas/rose.png';
import menthe from '../../assets/teas/mint.png';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';



import TeaCard from './TeaCard/TeaCard';
import classes from './TeaCards.module.css';

import '../../App.css';




const TeaCards = ({ addCart }) => {

    const teas = [
        {id: 1, imgSrc: hibiscus, name: "Hibiscus", price: "7", quantity: 1, poids: "125"},
        {id: 2, imgSrc: camomille, name: "Camomille", price: "8", quantity: 1, poids: "200"},
        {id: 3, imgSrc: framboise, name: "Framboise", price: "8", quantity: 1, poids: "200"},
        {id: 4, imgSrc: romarin, name: "Romarin", price: "5", quantity: 1, poids: "125"},
        {id: 5, imgSrc: earlGrey, name: "Earl Grey", price: "6", quantity: 1, poids: "125"},
        {id: 6, imgSrc: lavande, name: "Lavande", price: "7", quantity: 1, poids: "125"},
        {id: 7, imgSrc: amande, name: "Amande", price: "15", quantity: 1, poids: "300"},
        {id: 8, imgSrc: rose, name: "Rose", price: "13", quantity: 1, poids: "300"},
        {id: 9, imgSrc: menthe, name: "Menthe", price: "15", quantity: 1, poids: "300"}      
    ]
    const [selectPoids, setSelectPoids] = useState('');
    const poids = ["125", "200", "300"];

    const [value, setValue] = useState({min:2, max:7})
    return (
        <>
            <InputRange 
                maxValue={20}
                minValue={2}
                formatLabel={selectPrice => `${selectPrice} €`}
                value={value}
                onChange={value => setValue(value)}
                onChangeComplete={value=> setValue(value)} />
            
            <ul>
                {
                    poids.map((p) => {
                        return (
                            <li key={p}>
                               <input 
                                    type="radio" 
                                    value={p} 
                                    id={p} 
                                    checked={p === selectPoids}  // input checked si le poids parcouru est égal au poids checked
                                    onChange={(e) => setSelectPoids(e.target.value)}
                                /> 
                               <label htmlFor={p}>{p}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="cancel">
                {
                    selectPoids && <h5 onClick={() => setSelectPoids('')}>Annuler filtre</h5>
                }
            </div>
            {
               teas
               .filter((tea) => {
                        return tea.price >= value.min && tea.price <= value.max;
                })
               .filter((tea) => {
                   return tea.poids.includes(selectPoids);
               })
                .map(tea => 
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