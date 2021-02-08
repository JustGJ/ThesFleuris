import React from 'react';
import classes from '../Background/Background.module.css';

const Background = ({ img, title }) => {

  let background = {backgroundImage: "url(" +  img  + ")"}

  return (
    <>
        <div className={classes.background} style={ background }>
          <h3>{title}</h3> 
        </div>
        
    </>
  );        
};

export default Background;