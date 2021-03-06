import React, {useEffect } from 'react';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Cart  = ({ cart, setCart, cartItem, setQuantity , removeItem, cartEmpty }) => {

    // == Montant total du panier
    let subTotal = 0;
    cartItem.map(i => {
        return subTotal += i.price * i.quantity
    })

    useEffect(() => {
      
        fetch(
            'https://cors.bridged.cc/https://jobs.github.com/positions.json'
          )
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [])

    return (
        <>
            <div className={[classes.cartContent, `${cart && classes.cartContentActive}`].join(' ')}  >
                <div className={classes.cartClose} onClick={() => setCart(false)}>
                    <ChevronRightIcon fontSize="large" style={{color: "#fff"}} />
                    <h3>Panier</h3>
                </div>
               
                {
                    cartItem.map(item => 
                        <div className={classes.cartItem} key={item.id}>
                            <CartItem 
                                item={item} 
                                setQuantity={setQuantity}
                                removeItem={removeItem}
                            />
                            <hr />
                        </div>  
                    )
                }

                <div className={classes.cardDetails}>
                    <div className={classes.total}>
                       { 
                            subTotal === 0 ? 
                            
                            (<p>Votre panier est vide !</p>) 
                            
                            : 

                            <>
                                <p>Sous-total</p> 
                                <span>{subTotal},00 €</span>
                                <hr /> 
                                <button className={classes.emptyButton} onClick={cartEmpty}>Réinitialiser</button>
                            </>          
                       }          
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
