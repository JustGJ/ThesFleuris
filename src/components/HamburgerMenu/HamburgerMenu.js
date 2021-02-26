import React, {useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import PinterestIcon from '@material-ui/icons/Pinterest';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import classes from './HamburgerMenu.module.css';

const HamburgerMenu = ({ total }) => {

	const location = useLocation();
	const display = useRef(null);

	// == Toggle qui affiche/retire le menu au click
	const openMenu = () => {
		display.current.classList.toggle(classes.active) 	
	}

	// == Au clic d'un lien, on ferme le menu
	const closeMenu = () => {
		display.current.classList.remove(classes.active) 	
	}

	return (
	  <>
		<div className={classes.sideBar}>
			{
				location.pathname !== '/cart' && (
					<Link to="/cart">
						<Badge badgeContent={total.length} color="secondary">
							<ShoppingCartIcon className={classes.cart}/>
						</Badge>
					</Link>
					)
			}
  
		  	<Link to="/">Thés Fleuries</Link>
			
			<div className={classes.toggleButton} onClick={openMenu} >
					<span></span>
					<span></span>
					<span></span>
            </div> 
		</div>
  
		<div ref={display} className={classes.menu}>
		  <div className={classes.login}>
		  	<AccountCircleIcon />
			<Link to="/login">Connexion</Link>
		  </div>
  
			<ul className={classes.navigation}>
				<li><Link to="/tea" onClick={closeMenu}>Thés</Link></li>
				<li><Link to="/accessories" onClick={closeMenu}>Accessoires</Link></li>
				<li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
				<li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
				<li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
			</ul>
  
			<div className={classes.social}>
				<FacebookIcon />
				<InstagramIcon />
				<PinterestIcon />
			</div>
		</div>
	  </>
	);
  };
  
  export default HamburgerMenu;