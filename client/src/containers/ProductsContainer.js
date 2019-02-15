import React from 'react';

export default class ProductsContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/products',
            {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type':'application/json'}
            })
            .then(response => response.json())
            .then(data => this.setState({
                products: data,
                isLoaded: true
            }))
            .catch(error => console.log(error));
    }
    render() {
        const { products, isLoaded } = this.state;

        if(isLoaded){
            if(products.length > 0){
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
            }else{
                return (
                    <React.Fragment>
                        <p>Product Container</p>
                    </React.Fragment>
                )
            }
        }
        return (
            <React.Fragment>
                <p>Loading....</p>
            </React.Fragment>
        )

    }
}