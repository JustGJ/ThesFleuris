import React from 'react';
import classes from './ToBuy.module.css';

const ToBuy = (props) => {

  return (
    <div className={classes.showInfos}>
      <div className={classes.infosContent}> 
        {props.name}
        <img src={props.img} alt={props.img}/>
      </div>  
    </div>
  );
};

export default ToBuy;