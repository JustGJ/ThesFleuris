import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../Background/Background';
import './Header.css';

const Header = ( {img, title} ) => {

    return (
        <>
        <div className="navbar">
            <ul className="navigation">
                <li><Link to="/tea">Thés</Link></li>
                <li><Link to="/accessories">Accessoires</Link></li>
                {/* <li><Link to="/about">A propos</Link></li> */}
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="index"> 
                <Link to="/">Thés Fleuries</Link>
            </div>

            <div className="link">
               <div className="login">
                   <i className="fas fa-user-circle"></i>
                   <Link className="log" to="/tea">Connexion</Link>
               </div>
               <div className="social">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i class="fab fa-pinterest"></i>
                    <i className="fas fa-shopping-cart"></i>
               </div>
            </div>
        </div>
            <Background img={img} title={title} />
            <h3 className="title">{title}</h3>
        </>
    )
}

export default Header;