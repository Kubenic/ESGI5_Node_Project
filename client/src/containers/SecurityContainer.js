import React from 'react';
import { Route, Switch } from "react-router";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../redux/actions/security"

class SecurityContainer extends React.Component {
    handleSubmit = (data) => {
        //this.props.dispatch(login(data.username, data.password, this.props.dispatch));
        this.props.login(data.username, data.password);
    }

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password, dispatch))
    }
}

export default connect(undefined, mapDispatchToProps)(SecurityContainer);