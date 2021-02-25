
import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import ToBuy from '../../ToBuy/ToBuy';
import classes from './New.module.css';

const New = ( { newTea, addCart } ) => {
  // == Stock un booléen qui permet d'ouvrir/fermer la fenêtre d'information du thé cliqué.
  const [showInfo, setShowInfo] = useState(false); 

  // == Toggle permettant d'afficher/cacher le menu hamburger
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
            <img src={newTea.imgSrc} alt={newTea.imgSrc}  onClick={displayInfo} />
          </Link>

            <button onClick={() => addCart(newTea)}>
                Ajouter au panier
            </button>
            <h2>{newTea.name}</h2>
            <span>{newTea.price} €</span>

        </div>   

        {

          showInfo && <ToBuy img={newTea.img} name={newTea.name} price={newTea.price} poids={newTea.poids} showInfo={displayInfo} />

        }

    </div>
   

     
 
    </>
  );
};

export default New;