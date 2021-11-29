import React, { useState } from 'react';
import classes from './New.module.css';
import 'react-toastify/dist/ReactToastify.css';

const New = ({ newTea, addCart, key }) => {
    // == Stock un booléen qui permet d'ouvrir/fermer la fenêtre d'information du thé cliqué.
    const [showInfo, setShowInfo] = useState(false);

    // == Toggle permettant d'afficher/cacher le menu hamburger
    const displayInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <>
            <div className={classes.card}>
                <div className={classes.imgContainer}>
                    <img src={newTea.imgSrc} alt={newTea.imgSrc} onClick={displayInfo} />
                </div>
                <div className={classes.cardText}>
                    <h3>{newTea.name}</h3>
                    <span>{newTea.price},00 €</span>
                </div>
                <div className={classes.cardIcon}>
                    <i className="fas fa-shopping-cart" onClick={() => addCart(newTea)}></i>
                </div>
            </div>
        </>
    );
};

export default New;
