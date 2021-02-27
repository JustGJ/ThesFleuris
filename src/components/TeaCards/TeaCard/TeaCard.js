import React, { useState } from 'react';
import classes from './TeaCard.module.css';
import { NavHashLink as Link } from 'react-router-hash-link';


const TeaCard = ({ addCart, tea }) => {
      // == Stock un booléen qui permet d'ouvrir/fermer la fenêtre d'information du thé cliqué.
  const [showInfo, setShowInfo] = useState(false); 

  // == Toggle permettant d'afficher/cacher le menu hamburger
  const displayInfo = () => {
    setShowInfo(!showInfo)
  }

    return (
       
            <div className={classes.card}>
        <div className={classes.informations}>
          <Link
            to="/#ToBuy"
            smooth={true}
            offset={-70}
            duration={500}
            >
            <img src={tea.imgSrc} alt={tea.imgSrc} onClick={displayInfo} />
          </Link>

            {/* Au click sur "Ajout panier", on envoie l'item dans cart */}
            <button onClick={() => addCart(tea)}>
                Ajouter au panier
            </button>
            <h2>{tea.name}</h2>
            <span>{tea.price} €</span>

        </div>   

          {/* showInfo && <ToBuy img={tea.imgSrc} name={newTea.name} price={newTea.price} poids={newTea.poids} showInfo={displayInfo} /> */}

    </div>
    );
};

export default TeaCard;