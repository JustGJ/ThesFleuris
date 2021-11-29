import React from 'react';
import classes from './CardItem.module.css';

const CartItem = ({ item, setQuantity, removeItem }) => {
    return (
        <div className={classes.card}>
            <img src={item.imgSrc} alt="" />
            <div className={classes.cardInfo}>
                <div className={classes.cardContent}>
                    <p>{item.name}</p>
                    <span>{item.price},00 €</span>
                </div>
                <div className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <button onClick={() => setQuantity(item, item.quantity - 1)}>-</button>
                        <input type="number" value={item.quantity} onChange={() => item.quantity} />
                        <button onClick={() => setQuantity(item, item.quantity + 1)}>+</button>
                    </div>
                </div>
            </div>
            <i className="fas fa-times-circle" onClick={() => removeItem(item.id)} />
        </div>
    );
};

export default CartItem;
