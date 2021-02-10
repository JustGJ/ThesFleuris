import React, { useState } from 'react';
import classes from '../Opinion/Opinion.module.css';

const Opinion = () => {

  const opinions = [                              
    {id: 1, opinion : "« Une qualité formidable, des saveurs agréables »", autor: "Sonia Petit"},
    {id: 2, opinion : "« Meilleur rapport qualité prix, un large choix »", autor: "Julie Brun"},
    {id: 3, opinion : "« Un service de qualité, de vrais professionnels »", autor: "René Laroche"}
  ]

const [count, setCount] = useState(0);  // Incrémenteur

const handleChangeNext = () => {        // Avis suivant
    count !== opinions.length - 1 ? setCount(count + 1) : setCount(0);
    console.log(count);
}

const handleChangeBack = () => {        // Avis précédent
  count === 0 ? setCount(opinions.length - 1) : setCount(count - 1);  
  console.log(count);
}


const titleDisplay = opinions[count].opinion;     // Affichage avis
const autorDisplay = opinions[count].autor;       // Affichage auteur

  return (
    <div className={classes.opinions}>
      <div className={classes.arrowLeft} onClick={handleChangeBack}></div>     {/* Flèche gauche */}

        <div>
          <p className={classes.title}>{titleDisplay}</p>
          <p className={classes.autor}>{autorDisplay}</p>
        </div>

      <div className={classes.arrowRight} onClick={handleChangeNext}></div>    {/*Flèche droite*/}
    </div>
  );    
};

export default Opinion;