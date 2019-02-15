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
            <div className="formCss">
                <form onSubmit={this.handleSubmit}>
                    <label> <span> Identifiant : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'login')}/>
                    </label>
                    <label> <span> Nom de compte : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'username')}/>
                    </label>
                    <label> <span> Prénom : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'firstname')}/>
                    </label>
                    <label> <span> Nom : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'lastname')}/>
                    </label>
                    <label> <span> Adresse E-Mail : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'email')} type="email"/>
                    </label>
                    <label> <span> Mot de passe : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'password')} type="password"/>
                    </label>
                    <button className="SubmitButton">Submit</button>
                </form>
            </div>
        )
    }

} 