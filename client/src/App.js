import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ToggleButtonContainer from "./containers/ToggleButtonContainer";
import SecurityContainer from "./containers/SecurityContainer";
import ProductCreateContainer from "./containers/ProductCreateContainer";
import ProductsContainer from "./containers/ProductsContainer";
import ProfileBanner from "./containers/ProfileBanner";
import HeaderContainer from "./containers/HeaderContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <React.Fragment>
                        <HeaderContainer/>
                        <Switch>
                            <Route path="/security" component={SecurityContainer}/>
                            <Route path="/product/create" exact component={ProductCreateContainer}/>
                            <Route path="/products" component={ProductsContainer}/>
                            <Route path="/" component={ProductsContainer}/>
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;