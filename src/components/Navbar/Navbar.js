import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import classes from './Navbar.module.css'

const Header = () => {

    const isMobile = useMediaQuery({query: '(max-width: 520px'});           // Utilisation mediaQuery mobile
   
    return isMobile ? (  
        <>                                   
            <HamburgerMenu />
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
        
            <div className={classes.index}> 
                <Link to="/">Thés Fleuries</Link>
            </div>
        
            <div className={classes.link}>
                <div className={classes.login}>
                    <i className="fas fa-user-circle"></i>
                    <Link to="/login">Connexion</Link>
                </div>
                <div className={classes.social}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest"></i>
                    <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                </div>
            </div>
        </div>
        </>
}

export default Header;