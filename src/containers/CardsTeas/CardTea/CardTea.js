import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ToBuy from '../../../components/ToBuy/ToBuy';
import classes from './CardTea.module.css';



const CardTea = ( {img, name, price, desc, showInfos} ) => {
  
  const [showInfo, setShowInfo] = useState(false);


  return (
    <>
    <div className={classes.card}>
        <img src={img} alt={img} />
      
        <div className={classes.informations}>
          <Link
            to="#ToBuy"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            <button onClick={() => setShowInfo(!showInfo)}>Acheter</button>
          </Link>
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