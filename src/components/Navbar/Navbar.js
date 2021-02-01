import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.css';

const Navbar = () => {

    const styleIcon = {color: "#fff", fontSize: 22}

        console.log(window.innerWidth)
    
    return (
        <div className="navbar">
            <ul className="navigation">
                <li><Link to="/tea">Thés</Link></li>
                <li><Link to="/accessories">Accessoires</Link></li>
                <li><Link to="/about">A propos</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="index"> 
                <Link to="/">Thés Fleuris</Link>
            </div>

            <div className="link">
               <div className="login">
                   <AccountCircleIcon style={styleIcon} />
                   <Link to="/tea">Connexion</Link>
               </div>
               <div className="social">
                   <a href="www.facebook.com"><FacebookIcon style={styleIcon} /></a>
                   <a href="www.instagram.com"><InstagramIcon style={styleIcon} /></a>
                   <a href="www.instagram.com"><PinterestIcon style={styleIcon}/></a>
               </div>
               <ShoppingCartIcon className="shop" style={{color: "white", fontSize: 32}} />
            </div>
            
        </div>
    )
}

export default Navbar;