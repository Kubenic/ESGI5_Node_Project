import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ToggleButtonContainer from "./containers/ToggleButtonContainer";
import SecurityContainer from "./containers/SecurityContainer";
import ProductCreateContainer from "./containers/ProductCreateContainer";
import ProductsContainer from "./containers/ProductsContainer";
import ProfileBanner from "./containers/ProfileBanner"

class App extends Component {

    render() {
        const style = {
            maxHeight: 50,
            maxWidth: "100%"
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={style}/>
                    <ProfileBanner/>
                    <ToggleButtonContainer/>

                    <BrowserRouter>
                        <React.Fragment>
                            <Link to="/security/login">Connexion</Link>
                            <Link to="/product/create">Créer un produit</Link>
                            <Link to="/products">Voir les produits</Link>

                            <Switch>
                                <Route path="/security" component={SecurityContainer}/>
                                <Route path="/product/create" exact component={ProductCreateContainer}/>
                                <Route path="/products" component={ProductsContainer}/>
                            </Switch>
                        </React.Fragment>
                    </BrowserRouter>
                </header>
            </div>
        );
    }
}

export default App;