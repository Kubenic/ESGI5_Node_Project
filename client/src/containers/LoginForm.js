import React from 'react';

export default class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
        signin: true,
        signup: false
    };


    handleKeyUp = (event, field) => {
        const input = event.currentTarget;

        this.setState({
            [field]: input.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Nom de compte</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, 'username')}/>
                <label>Mot de passe</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, 'password')} type="password"/>
                <button>Submit</button>
            </form>
        )
    }

} 