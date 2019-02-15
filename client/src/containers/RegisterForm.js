import React from 'react';

export default class RegisterForm extends React.Component {

    state = {
        email:'',
        login: '',
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        signin: false,
        signup: true
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

    componentDidUpdate(){
        document.title = "Enregistrement";
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Identifiant :
                    <input onKeyUp={(event) => this.handleKeyUp(event, 'login')}/>
                </label>
                <label>Nom de compte :
                    <input onKeyUp={(event) => this.handleKeyUp(event, 'username')}/>
                </label>
                <label>Prénom :
                    <input onKeyUp={(event) => this.handleKeyUp(event, 'firstname')}/>
                </label>
                <label>Nom :
                    <input onKeyUp={(event) => this.handleKeyUp(event, 'lastname')}/>
                </label>
                <label>Adresse E-Mail :
                    <input onKeyUp={(event) => this.handleKeyUp(event, 'email')} type="email"/>
                </label>
                <label>Mot de passe :
                    <input onKeyUp={(event) => this.handleKeyUp(event, 'password')} type="password"/>
                </label>
                <button>Submit</button>
            </form>
        )
    }

} 