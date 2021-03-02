import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Contact, Blog, Tea, Login } from './pages/export';

import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';


class App extends Component {

    // == Panier, montant total du panier
    state = {
        cart: [],
        total : []
    }

    // == Notification d'ajout dans le panier
    notify = (name) => {
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
    handleAddToCart = (newItem) => {
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
     handleUpdateQuantity = (id, imgSrc, name, quantity, price) => {
        // == On récupère l'index de l'item que l'on doit modifier
        const itemIndex = this.state.cart.findIndex(l => {
            return l.id === id;
        })
        // == Nouvel item 
        const newItem = {id, imgSrc, name, quantity, price};

        // == Copie de l'ancien item
        const newCart= [...this.state.cart];
        // == L'ancien item à l'indice[index] est remplacé pour le nouvel item
        newCart[itemIndex]= newItem;

        // == Mise à jour du state
        this.setState({
            cart: newCart
        })
    }

    // == Suppression d'un article du panier et MAJ du total
    handleDeleteCartItem = (id) => {
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
    handleEmptyCart = () => {
        this.setState({
            cart: '',
            total: ''
        })
    }


    render() {
     return (
        <BrowserRouter>
            <Navbar total={this.state.total}/>
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
                <Route path="/cart">

                    <Cart 
                        cart={this.state.cart} 
                        modifier={this.handleUpdateQuantity}
                        supprimer={this.handleDeleteCartItem}
                        reinitialiser={this.handleEmptyCart} 
                        total={this.state.total}
                    />  
                </Route>
                <Route path="/ThesFleuris" component={Home} />
            </Switch>   
            <Footer />
        </BrowserRouter>
        )
    }
}
export default App;
