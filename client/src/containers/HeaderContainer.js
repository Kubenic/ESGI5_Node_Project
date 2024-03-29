import React from 'react';
import ProfileBanner from "./ProfileBanner";
import {Link} from "react-router-dom";

export default class HeaderContainer extends React.Component {

    render() {

        return (
            <header className="App-header">
                <ProfileBanner/>
                <React.Fragment>
                    <Link to="/security/login">Connexion</Link>
                    <Link to="/security/register">Enregistrement</Link>
                    <Link to="/product/create">Créer un produit</Link>
                    <Link to="/products">Voir les produits</Link>
                </React.Fragment>
            </header>
        )
    }
}