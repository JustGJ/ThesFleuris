import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Contact, Blog, Tea, Login } from './pages/export';

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
    const handleAddToCart = (newItem) => {
        // == Nouvel item à ajouter au panier
        const item = {
            id: newItem.id,
            imgSrc: newItem.imgSrc,
            name: newItem.name,
            price: newItem.price,
            quantity: newItem.quantity
        }

        // == Copie de l'ancien pannier auquel on ajoute notre nouvel item avec push
        const newCart = [...this.state.cart];
        newCart.push(item);

        // = Ajout du montant total
        const total = {
            id: newItem.id,
            price: newItem.price
        }

        // == Copie de l'ancien montant auquel on ajoute notre nouveau montant avec push
        const newTotal = [...this.state.total];
        newTotal.push(total)

        // == MAJ du panier et du total
        this.setState({
            cart: newCart,
            total: newTotal
        })
       this.notify(newItem.name);
    }

     // == Modification d'un article (A RETRAVAILLER)
    const handleSetQuantity = (id, imgSrc, name, quantity, price) => {
        // == On récupère l'index de l'item que l'on doit modifier
        const itemIndex = this.state.cart.findIndex(l => {
            return l.id === id;
        })
        // == Nouvel item 
        const newItem = {
            id:id, 
            imgSrc:imgSrc, 
            name:name, 
            quantity:quantity, 
            price:price
        };

        const total = {
            id: newItem.id,
            price: newItem.price
        }
        
        // == Copie de l'ancien item
        const newCart= [...this.state.cart];
        // == L'ancien item à l'indice[index] est remplacé par le nouvel item
        newCart[itemIndex] = newItem;

        // == Copie de l'ancien montant auquel on ajoute notre nouveau montant avec push
        const newTotal = [...this.state.total];
        newTotal.push(total)

        // == Mise à jour du state
        this.setState({
            cart: newCart,
            total: newTotal
        })
    }

    // == Suppression d'un article du panier et MAJ du total
    const handleRemoveItemToCart = (id) => {
        // == On récupère l'index en vérifiant si l'Id de l'item cliqué correspond à l'Id parcouru dans cart
        const cartItemIndex = this.state.cart.findIndex(item => {
            return item.id === id;
        })

        // == Copie de l'ancien pannier auquel on retire l'item grâce à l'index récupéré précédemment, et avec splice
        const newCart = [...this.state.cart];
        newCart.splice(cartItemIndex, 1)

        // == Copie de l'ancien total auquel on retire le montant de l'item grâce à l'index récupéré précédemment, et avec splice
        const newTotal = [...this.state.cart];
        newTotal.splice(cartItemIndex, 1);

        // == Mise à jour du pannier et du montant total
        this.setState({
            cart: newCart,
            total: newTotal
        })
    }

    // == Remise à zéro du panier
    const handleEmptyCart = () => {
        this.setState({
            cart: '',
            total: ''
        })
    }

    return (
        <BrowserRouter>
            <Navbar total={this.state.total}/>
            <Cart 
                isOpen={cart} 
                cartItem={cartItem}
                setQuantity={handleSetQuantity}
                removeItem={handleRemoveItemToCart}
                reinitialiser={this.handleEmptyCart} 
                total={this.state.total}
                    />  
            <Switch>
                <Route exact path="/ThesFleuris">
                    <Home addCart={this.handleAddToCart} />
                </Route>  
                <Route path="/tea" >
                    <Tea addCart={this.handleAddToCart} />
                </Route>
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/ThesFleuris" component={Home} />
            </Switch>   
            <Footer />
        </BrowserRouter>
        )
    
}
export default App;









.emptyCart {
    margin: 0 auto;
    text-align: center;
    width: 80%;
}

.emptyCart p {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.emptyCart a {
    font-size: 1.5rem;
    font-style: italic;
    text-decoration: underline;
}

.cartContent {
    width: 100vw;
    margin: 0 auto;
    text-align: center;
}

.cart {
    display: inline-block;
    margin: 2rem 1rem;
    width: 30%;
    box-shadow: 1px 3px 8px 1px rgb(192, 192, 192);
    border-radius: .5rem;
}

.cardDetails {
    display: flex;
    align-items: center;
    padding: 0rem 5rem;
    justify-content: space-between;
    font-size: 2.5rem;
}

.buttons button {
    font-family: 'Roboto';
    background-color: #F50057;
    color: #fff;
    text-transform: uppercase;
    margin: 0 .4rem .7rem .4rem;
    padding: .5rem;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid #000;
    outline: none;
}

.buttons button:hover {
    background-color: #C51162;
}

.buttons button:nth-child(2) {
    background-color: #3F51B5 ;
}

.buttons button:nth-child(2):hover {
    background-color: #303F9F ;
}



@media screen and (max-width: 960px) {
    .cart {
      width: 40%;
    }
  }

  @media screen and (max-width: 850px) {
    .cardDetails {
      flex-direction: column;
      font-size: 2rem;
    }
    .total {
        margin-bottom: .7rem;
    }
    .buttons button {
        font-size: 1rem;
    }
  }


  @media screen and (max-width: 650px) {
    .cart {
      width: 70%;
    }
  }

  @media screen and (max-width: 450px) {
    .cart {
      width: 80%;
    }
  }

  @media screen and (max-width: 450px) {
    .cart {
      width: 90%;
    }
  }