import React from 'react';
import { Route, Switch } from "react-router";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {connect} from "react-redux";
import {login, register} from "../redux/actions/security"

class SecurityContainer extends React.Component {
    handleSubmit = (data) => {
        if(data.signin){
            this.props.login(data.username, data.password);

        }
        if(data.signup){
            this.props.register(data.username, data.password, data.login, data.email, data.firstname, data.lastname);
        }
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password, dispatch)),
        register: (username, password, login, email, firstname, lastname) => dispatch(register(username, password, login, email, username, firstname, lastname, dispatch))
    }
};

export default connect(undefined, mapDispatchToProps)(SecurityContainer);