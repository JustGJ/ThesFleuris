import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Background from '../Background/Background';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Header.css';

const Header = ( {img, title} ) => {

    const isMobile = useMediaQuery({query: '(max-width: 580px'});// Utilisation mediaQuery mobile
   
    return isMobile ? (  
        <>                                   
            <HamburgerMenu />
            <Background img={img} title={title} />
        </>
    ) : (
        <>
        <div className="navbar">
            <ul className="navigation">
                <li><Link to="/tea">Thés</Link></li>
                <li><Link to="/accessories">Accessoires</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        
            <div className="index"> 
                <Link to="/">Thés Fleuries</Link>
            </div>
        
            <div className="link">
                <div className="login">
                    <i className="fas fa-user-circle"></i>
                    <Link to="/tea">Connexion</Link>
                </div>
                <div className="social">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
        <Background img={img} title={title} />
        </>
    )
    }
     
       


   


export default Header;