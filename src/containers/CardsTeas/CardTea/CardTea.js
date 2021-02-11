import React, { useState } from 'react';
import ToBuy from '../../../components/ToBuy/ToBuy';
import classes from './CardTea.module.css';

const CardTea = ( {img, name, price, desc, showInfos} ) => {
  
  const [showInfo, setShowInfo] = useState(false);


  return (
    <>
    <div className={classes.card}>
        <img src={img} alt={img} />
      
        <div className={classes.informations}>
            <button onClick={() => setShowInfo(true)}>Acheter</button>
            <h2>{name}</h2>
            <span>{price} €</span>
        </div>   
    </div>

      {

      showInfo && <ToBuy img={img} showInfo={showInfo} />

      }

 
    </>
  );
};

export default CardTea;