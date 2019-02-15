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
            <div class="formCss">
                <form onSubmit={this.handleSubmit}>
                    <label> <span> Titre : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'title')}/>
                    </label>
                    <label> <span> Description : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'description')}/>
                    </label>
                    <label> <span> Prix : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'price')}/>
                    </label>
                    <label> <span> Vote : </span>
                        <input onKeyUp={(event) => this.handleKeyUp(event, 'vote')}/>
                    </label>
                    <button class="SubmitButton">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (title, description, price, vote) => dispatch(add(title, description, price, vote, dispatch)),
    }
};

export default connect(undefined, mapDispatchToProps)(ProductCreateContainer);