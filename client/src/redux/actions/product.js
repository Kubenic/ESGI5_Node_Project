export const add = (title, description, price, vote, dispatch) => {
    const data = {
        title: title,
        description: description,
        price: price,
        vote: vote
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch('http://localhost:8080/product/add',
        {
            method: 'POST',
            mode: "cors",
            headers: myHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((data)=> {
            dispatch(addProduct(data));
        })
        .catch(error => console.log(error));
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
};

export const addProduct = (data) => {
    return  {
        type: "ADD_PRODUCT",
        payload: data
    }
};