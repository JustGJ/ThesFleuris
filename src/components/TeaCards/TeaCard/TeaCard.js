import React, { useState } from 'react';
import classes from './TeaCard.module.css';

const TeaCard = ({ addCart, tea }) => {
    // == Stock un booléen qui permet d'ouvrir/fermer la fenêtre d'information du thé cliqué.
    const [showInfo, setShowInfo] = useState(false);

    // == Toggle permettant d'afficher/cacher le menu hamburger
    const displayInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div className={classes.card} onClick={displayInfo}>
            <div className={classes.imgContainer}>
                <img src={tea.imgSrc} alt={tea.imgSrc} />
            </div>
            <div className={classes.cardText}>
                <h3>{tea.name}</h3>
                <span>{tea.price},00 €</span>
            </div>
            <div className={classes.cardIcon}>
                <i className="fas fa-shopping-cart" onClick={() => addCart(tea)}></i>
            </div>
        </div>
    );
};

export default TeaCard;
