import React from 'react';
import classes from './CardItem.module.css';

const CartItem = ( { item, modifier, supprimer }) => {

    return (
        <div className={classes.card}>
            <img src={item.imgSrc} alt=""/>

            <div className={classes.cardContent}>
                <h4>{item.name}</h4>
                <span>{item.price},00 €</span>
            </div>
           <div className={classes.cardActions}>
                <div className={classes.buttons}>
                    <label>
                        Quantité
                        <input type="number"  />
                        <button type="submit" >Valider</button>
                    </label>
                </div>
                <button type="button" className={classes.remove} onClick={() => supprimer(item.id)}>Supprimer</button>
           </div>
        </div>
    );
};

export default CartItem;



    // const [quantity, setQuantity] = useState(item.quantity);
    // const [price, setPrice] = useState(item.price)
  
  
    // const retirerQuantite = () => {
    //     setQuantity(quantity - 1);
        // quantity < 1 && setQuantity(1);
        // modifier(item.id, item.imgSrc, item.name, item.price, quantity);
    // }
    
    // == Ajout quantité 
    // const ajoutQuantite = () => {
    //     setQuantity(quantity + 1);
    //     modifier(item.id, quantity);
        // modifier(item.id, item.imgSrc, item.name, item.price, quantity);
    // }

    // const onChangeQuantity = (e) => {
    //     setQuantity(e.target.value)
    // }
 
    // useEffect(() => {
    //     setPrice(quantity * item.price);
    //     console.log(quantity);
    //     console.log(item.price);
    //     console.log(price);
    // }, [quantity, item.price]);


    // const handleValidation = () => {
    //     modifier(item.id, item.imgSrc, item.name, quantity, price)
    //     console.log(quantity);
    //     console.log(item.price);
    //     console.log(price);
    // }
  
    // console.log(quantity);
    // console.log(item.price);
    // console.log(price);
