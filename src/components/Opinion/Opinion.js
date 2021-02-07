import React, { useState } from 'react';
import classes from '../Opinion/Opinion.module.css';

const Opinion = () => {

  const opinions = [
    {id: 1, opinion : "« Une qualité formidable, des saveurs agréables »", autor: "Sonia Petit"},
    {id: 2, opinion : "« Meilleur rapport qualité prix, un large choix »", autor: "Julie Brun"},
    {id: 3, opinion : "« Un service de qualité, de vrais professionnels »", autor: "René Laroche"},
  ]

const [count, setCount] = useState(0);

const handleChangeNext = () => {
    count !== opinions.length - 1 ? setCount(count + 1) : setCount(0);
}

const handleChangeBack = () => {
  count !== 0 ? setCount(count - 1) : setCount(3);
  console.log(count);
}


const opinionDisplay = opinions[count].opinion;
const autorDisplay = opinions[count].autor;

  return (
    <div className={classes.opinions}>
      <div className={classes.arrowLeft} onClick={handleChangeBack}></div>             {/* Flèche gauche */}

        <div className={classes.opinion}>
          <h1 className={classes.title}>{opinionDisplay}</h1>
          <p className={classes.autor}>{autorDisplay}</p>
        </div>
          
      <div className={classes.arrowRight} onClick={handleChangeNext}></div>    {/*Flèche droite*/}
    </div>
  );    
};

export default Opinion;