const user = require('./user');

export const login = (username, password, dispatch) => {
    const data = {
        login: username,
        password:password
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch('http://localhost:8080/user/login',
    {
        method: 'POST',
        mode: "cors",
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data)=> {
        if(data.isLoggedIn){
            dispatch(user.logUser({token: data.payload},dispatch))
        }
    })
    .catch(error => console.log(error));
    return {
        type: "RECEIVE_LOGIN",
        payload: {}
    }
};

export const register = (username, password, login, email, firstname, lastname, dispatch) => {
    const data = {
        username:username,
        password:password,
        login: login,
        email:email,
        firstname:firstname,
        lastname: lastname
    };
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch('http://localhost:8080/user/register',
        {
            method : 'POST',
            mode: "cors",
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((data) => {
            if(data.isLoggedIn){
                dispatch(user.logUser({token: data.payload},dispatch))
            }
        })
        .catch(error => console.log(error))
    return {
        type: "RECEIVE_LOGIN",
        payload: {}
    }
}
