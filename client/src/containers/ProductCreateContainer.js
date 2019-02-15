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