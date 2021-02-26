import React, { useState } from 'react';
import classes from './ToBuy.module.css';

const ToBuy = ( { img, name, price, poids, showInfo }) => {

  const [value, setValue] = useState(1);

  return (
    <div className={classes.showInfos} id="ToBuy" >

      <div className={classes.infosContent} > 
        <img  src={img} alt={img}/>

        <div className={classes.infos}>
          
          <h3>{name}</h3>
          <p>Prix : {price} €</p>
          <p>Poids : {poids} gr</p>

          <div className={classes.quantite}>
            <label htmlFor="Quantité">Quantité :</label>
            <input type="number" name="Quantité" id="Quantité" min="1" max="10" value={value} onChange={(e) => setValue(e.target.value)}/>
          </div>

          <div className={classes.actions}>
            <button>Ajouter au panier</button>
            <button onClick={showInfo}>Retour à la boutique</button>
          </div>
        </div>
      </div>  
   </div>
  );
};

export default ToBuy;