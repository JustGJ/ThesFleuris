import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import { Badge } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import PinterestIcon from '@material-ui/icons/Pinterest';


import classes from './Navbar.module.css'

const Navbar = ({ total }) => {

    const location = useLocation() 
    const isMobile = useMediaQuery({query: '(max-width: 600px'});          
   

    return isMobile ? ( 
        <>                                   
            <HamburgerMenu total={total}/>
        </>
    ) : 
   
        <>
            <div className={classes.navbar}>
                <ul className={classes.navigation}>
                    <li><NavLink activeClassName={classes.active} to="/tea">Thés</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/accessories">Accessoires</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/blog">Blog</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/contact">Contact</NavLink></li>
                </ul>
            
                <div className={classes.home}> 
                    <Link to="/">Thés Fleuries</Link>
                </div>
            
                <div className={classes.link}>
                    <div className={classes.login}>
                        <AccountCircleIcon />
                        <Link to="/login">Connexion</Link>
                    </div>
                    <div className={classes.social}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <PinterestIcon />
                        
                        {
                            location.pathname !== '/cart' && (
                                <Link to="/cart">
                                    <Badge badgeContent={total.length} color="secondary">
                                        <ShoppingCartIcon className={classes.cart}/>
                                    </Badge>
                                </Link>
                            )
                        }

                    </div> 
                </div>
            </div>
        </>
      
}   

export default Navbar;


// == Lorsque l'on est sur le panier, l'icone du panier disparaît

