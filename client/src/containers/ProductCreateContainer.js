import React from 'react';

export default class CreateProductFormContainer extends React.Component {

    state = {
        title: '',
        description: '',
        price: '',
        vote: ''
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
                <label>Titre</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, 'title')}/>
                <label>Description</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, 'description')}/>
                <label>Prix</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, 'price')}/>
                <label>Vote</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, 'vote')}/>
                <button>Submit</button>
            </form>
        )
    }

} 