import React, {useRef, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import classes from './HamburgerMenu.module.css';

const HamburgerMenu = () => {

  const [isOpen, setOpen] = useState(false);

  const display = useRef(null);

  return (
    <>
      <div className={classes.navbar}>
        <i className="fas fa-shopping-cart fa-2x"></i>

        <Link to="/">Thés Fleuries</Link>
          
        <Hamburger  color="#fff" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
            toggled ? display.current.classList.add(classes.display) : display.current.classList.remove(classes.display);  
          }}
         /> 
        </div>

      <div ref={display} className={classes.menu}>
        <div className={classes.login}>
          <i className="fas fa-user-circle fa-2x"></i>
          <Link to="/login">Connexion</Link>
        </div>

          <ul className={classes.navigation}>
              <li><Link to="/tea">Thés</Link></li>
              <li><Link to="/accessories">Accessoires</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className={classes.social}>
            <i className="fab fa-facebook-f fa-1x"></i>
            <i className="fab fa-instagram fa-1x"></i>
            <i className="fab fa-pinterest fa-1x"></i>
          </div>
      </div>
    </>
  );
};

export default HamburgerMenu;