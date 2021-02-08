import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
         <div className={classes.containerDiscover}>
            <div className={classes.discover}>
                  <h1>Découvrez <br/> les thés Fleuris</h1>
                  <ul className={classes.navigation}>
                      <li><Link to="/tea">Boutique</Link></li>
                      <li><Link to="/accessories">Accessoires</Link></li>
                      <li><Link to="/about">À propos</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                  </ul>
                  <span><Link to="/contact">Visitez nos boutiques</Link></span>
                  <p>Service client : 01 23 45 67 89</p>
              </div>

              <div className={classes.containerInfos}>
                  <p>Aide</p>
                  <div className={classes.infos}>
                      <Link to="/">FAQ</Link>
                      <Link to="/">Livraison et retours</Link>
                      <Link to="/">Politique du magasin</Link>
                      <Link to="/">Mode de paiement</Link>
                      <Link to="/">Mentions légales</Link>
                      <Link to="/">Politique en matière de cookies</Link>
                      <Link to="/">Politique de confidentialité</Link>
                      <Link to="/">Conditions d'utilisation</Link>
                  </div>
              </div>

              <div className={classes.follow}>
                  <p>Suivez-nous</p>
                  <div className={classes.social}>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Pinterest</Link>
                  </div>
              </div>
          </div>
          <div className={classes.submitEmail}>
            <input type="email" id="email" placeholder="Saisissez votre e-mail*" />
            <button type="submit" id="email">S'abonner</button>
        </div>
    </div>
    </>
  ); 
};

export default Footer;

