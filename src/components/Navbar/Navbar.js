import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    // let width = window.innerWidth;
    // const [state, setstate] = useState(width);

    // useEffect(() => {
    //     window.addEventListener('resize', e => {
    //         return width;
    //     })
    // }, [state])
    
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
                    <i className="fas fa-shopping-cart"></i>
               </div>
            </div>
        </div> 
    )
}

export default Navbar;