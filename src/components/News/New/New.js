
import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import ToBuy from '../../ToBuy/ToBuy';
import classes from './New.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            smooth={true}
            offset={-70}
            duration={500}
            >
            <img src={newTea.imgSrc} alt={newTea.imgSrc} onClick={displayInfo} />
          </Link>

            {/* Au click sur "Ajout panier", on envoie l'item dans cart */}
            <button onClick={() => addCart(newTea)}>
            <ToastContainer 
              position="bottom-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
            />
                Ajouter au panier
            </button>
            <h2>{newTea.name}</h2>
            <span>{newTea.price},00 €</span>

        </div>   

        {

          showInfo && <ToBuy img={newTea.imgSrc} name={newTea.name} price={newTea.price} poids={newTea.poids} showInfo={displayInfo} />

        }

    </div>
    </>
  );
};

export default New;