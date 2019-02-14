import React from 'react';

export default class ProductContainer extends React.Component {
    constructor() {
        super();
        this.state = { products: [] }
    }

    render() {
        fetch('http://localhost:8080/products',
            {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type':'application/json'}
            })
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
            .catch(error => console.log(error));

        return (
            <React.Fragment>
                <p>Product Container</p>
                {this.state.products.map((product, i) => {
                    return (
                        <React.Fragment key={`${i}`}>
                        <div>{product.title}</div>
                        <div>{product.description}</div>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    }
}