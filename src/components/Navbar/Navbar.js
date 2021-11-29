import React from 'react';
import { NavLink } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from './Navbar.module.css';

const Navbar = ({ cart, setCart, cartItem }) => {
    return (
        <>
            <div className={classes.navbar}>
                <ul className={classes.content}>
                    <li>
                        <NavLink activeClassName={classes.active} to="/tea">
                            Thés / Accessoires
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={{ textTransform: 'uppercase' }}
                            activeClassName={classes.active}
                            to="/ThesFleuris">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <Badge badgeContent={cartItem.length} color="secondary">
                            <ShoppingCartIcon
                                className={classes.cart}
                                onClick={() => setCart(!cart)}
                            />
                        </Badge>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
