import React from 'react';
import connect from "react-redux/es/connect/connect";
import { add } from '../redux/actions/product';

class ProductCreateContainer extends React.Component {

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
        this.props.add(this.state.title, this.state.description, this.state.price, this.state.vote);
        this.props.history.push('/products');
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

const mapDispatchToProps = dispatch => {
    return {
        add: (title, description, price, vote) => dispatch(add(title, description, price, vote, dispatch)),
    }
};

export default connect(undefined, mapDispatchToProps)(ProductCreateContainer);