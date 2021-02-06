import React, {useRef, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import '../HamburgerMenu/HamburgerMenu.css';

const HamburgerMenu = () => {

  const [isOpen, setOpen] = useState(false);

  const display = useRef(null);

  // isOpen && window.addEventListener("scroll", function (e){
	
  //   window.scrollTo(0,0);
    
  // });

  return (
    <>
      <div className="hamburger__navbar">
          <i className="fas fa-shopping-cart"></i>
          <Link to="/">Thés Fleuries</Link>
          <Hamburger  color="#fff" onToggle={toggled => {
              if(toggled){
                display.current.classList.add("active");
              } else {
                 display.current.classList.remove("active");
              }
            }} toggled={isOpen} toggle={setOpen} /> 
      </div> 

      <div ref={display} className="hamburger__menu">
        <div className="login__hamburger">
          <i className="fas fa-user-circle"></i>
          <Link to="/tea">Connexion</Link>
        </div>
          <ul className="hamburger__navigation">
              <li><Link to="/tea">Thés</Link></li>
              <li><Link to="/accessories">Accessoires</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="hamburger__social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
      </div>
    </>
  );
};

export default HamburgerMenu;