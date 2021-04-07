import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Tea } from './pages/export';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const App = () => {

    // == Panier, montant total du panier
    
    const [cart, setCart] = useState(false)
    const [cartItem, setCartItem] = useState([])


    // == Notification d'ajout dans le panier
    const notify = (name) => {
        toast.success(`Vous avez ajouté ${name}`, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            closeButton: false
        })
    }
    // == Ajout d'item dans panier : newItem en param = toutes les infos de l'item cliqué dans composant News.js
    const handleAddItemToCart = (item) => {
       const itemIndex = cartItem.findIndex(i => i.id === item.id);
       if(itemIndex === -1) {
           setCartItem([...cartItem, item])
       } else {
           setCartItem([...cartItem], cartItem[itemIndex].quantity += item.quantity)
       }
    //    console.log(itemIndex);
    }
 
     // == Modification quantité article
    const handleSetQuantity = (item, quantity) => {
        if(quantity >= 1) {
            const itemIndex = cartItem.findIndex(i => i.id === item.id);
            setCartItem([...cartItem], cartItem[itemIndex].quantity = quantity)
        }
    }

    // == Suppression d'un article du panier et MAJ du total
    const handleRemoveItemToCart = (id) => {
        const itemIndex = cartItem.findIndex(i => i.id ===  id)
        let newCartList = [...cartItem];

        newCartList.splice(itemIndex, 1);       
        setCartItem(newCartList);
    }
    
    // == Réinitilalisation panier
    const handleEmptyCart = () => {
       setCartItem([]);
    }


    return (
        <BrowserRouter>
            <Navbar cart={cart} setCart={setCart} cartItem={cartItem} />
            <Cart 
                cart={cart} 
                cartItem={cartItem}
                setCart={setCart}
                setQuantity={handleSetQuantity}
                removeItem={handleRemoveItemToCart}
                cartEmpty={handleEmptyCart} 
            />  
            <Switch>
                <Route exact path="/ThesFleuris">
                    <Home 
                        addCart={handleAddItemToCart}
                        isOpen={cart} 
                        setCart={setCart}
                        setQuantity={handleSetQuantity}
                        cart={cart}
                    />
                </Route>  
                <Route path="/tea" >
                    <Tea addCart={handleAddItemToCart} />
                </Route>
                <Route path="/ThesFleuris" component={Home} />
            </Switch>   
            <Footer />
        </BrowserRouter>
        )
    
}
export default App;
