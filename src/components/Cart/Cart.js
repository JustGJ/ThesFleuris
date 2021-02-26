import React, {useState } from 'react';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

import { Link } from 'react-router-dom';


const Cart  = ({ cart, modifier , supprimer, reinitialiser, total }) => {


    // Ajout du montant total dans le panier
    let subTotal = 0;

    if(total.length){
        for(let i=0; i < total.length; i++){
            subTotal += total[i].price;
        }
    }

    // == Fonction qui se déclenche si panier vide
    const EmptyCart = () => (
        <div className={classes.emptyCart}>
            <p>Panier vide !</p>
            <Link to="/ThesFleuris">Ajouter des articles au panier</Link>
        </div>
    )

    // == Fonction qui affiche les articles si panier !== 0
    const FilledCart = () => (
        <div className={classes.cartContent}>

            {
                cart.map(item => 
                    <div className={classes.cart} key={item.id}>
                        <CartItem 
                            item={item} 
                            modifier={modifier}
                            supprimer={supprimer}
                        />
                    </div>  
                )
            }

            <div className={classes.cardDetails}>
                <div className={classes.total}>Total : {subTotal} €</div>
                <div className={classes.buttons}>
                    <button className={classes.emptyButton} onClick={reinitialiser}>Réinitialiser</button>
                    <button className={classes.checkout}>Paiement</button>
                </div>
            </div>
        </div>
    )
 
    return (

        <>
            {
                cart.length ? <FilledCart /> : <EmptyCart />
            }
        </>
    );
};

export default Cart;