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
            <div className="formCss">
                <form onSubmit={this.handleSubmit}>
                    <label> <span> Nom de compte : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'username')}/>
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