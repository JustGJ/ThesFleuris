import React, { useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import classes from './Navbar.module.css';

const Navbar = ({ cart, setCart, cartItem }) => {
	console.log(cartItem);

	const location = useLocation();
	const display = useRef(null);

	// == Toggle qui affiche/retire le menu au click
	const openMenu = () => {
		display.current.classList.toggle(classes.active);
	};

	// == Au clic d'un lien, on ferme le menu
	const closeMenu = () => {
		display.current.classList.remove(classes.active);
	};

	return (
		<>
			<div className={classes.navbar}>
				<ul className={classes.navigation}>
					<li>
						<NavLink activeClassName={classes.active} to="/tea">
							Nos thés et accessoires
						</NavLink>
					</li>
				</ul>

				<div className={classes.home}>
					<Link to="/ThesFleuris">Thés Fleuries</Link>
				</div>

				<div className={classes.link}>
					<div className={classes.social}>
						<FacebookIcon />
						<InstagramIcon />
						<PinterestIcon />

						<Badge badgeContent={cartItem.length} color="secondary">
							<ShoppingCartIcon
								className={classes.cart}
								onClick={() => setCart(!cart)}
							/>
						</Badge>
					</div>
				</div>
			</div>

			{/* Hamburger Menu */}
			<div className={classes.hamburgerMenu}>
				<div className={classes.sideBar}>
					{location.pathname !== '/cart' && (
						<Badge badgeContent={cartItem.length} color="secondary">
							<ShoppingCartIcon
								className={classes.cart}
								onClick={() => setCart(!cart)}
							/>
						</Badge>
					)}

					<Link to="/ThesFleuris" onClick={closeMenu}>
						Thés Fleuries
					</Link>

					<div className={classes.toggleButton} onClick={openMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div ref={display} className={classes.menu}>
					{/* <div className={classes.login}>
                        <AccountCircleIcon />
                        <Link to="/login" onClick={closeMenu}>Connexion</Link>
                    </div> */}

					<ul className={classes.navigation}>
						<li>
							<Link to="/tea" onClick={closeMenu}>
								Thés et accessoires
							</Link>
						</li>
						{/* <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li> */}
					</ul>

					<div className={classes.social}>
						<FacebookIcon />
						<InstagramIcon />
						<PinterestIcon />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;

// == Lorsque l'on est sur le panier, l'icone du panier disparaît
