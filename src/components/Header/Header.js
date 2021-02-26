import React from 'react';
import classes from '../Header/Header.module.css';

const Header = ({ background, title }) => {

  // == URL du background que l'on insère dans style
  let bgImage = {backgroundImage: "url(" +  background  + ")"}

  return (
    <>
        <div className={classes.background} style={ bgImage }>
          <h3>{title}</h3> 
        </div>
        
    </>
  );        
};

export default Header;