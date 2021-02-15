import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import ToBuy from '../../../components/ToBuy/ToBuy';
import classes from './CardTea.module.css';



const CardTea = ( {img, name, price, poids, desc, showInfos} ) => {
  
  const [showInfo, setShowInfo] = useState(false); // Stock un booléen qui permet d'ouvrir/fermer la fenêtre d'information du thé cliqué.

  const displayInfo = () => {
    setShowInfo(!showInfo)
  }


  return (
    <>
    <div className={classes.card}>
        <div className={classes.informations}>
          <Link
            to="/#ToBuy"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            <img src={img} alt={img}  onClick={displayInfo} />
          </Link>

            <Link to="/tea"><button >Acheter</button></Link>
            <h2>{name}</h2>
            <span>{price} €</span>

        </div>   

        {

          showInfo && <ToBuy img={img} name={name} price={price} poids={poids} showInfo={displayInfo} />

        }

    </div>
   

     
 
    </>
  );
};

export default CardTea;