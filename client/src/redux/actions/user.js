export const logUser = (data,dispatch) => {
    localStorage.setItem('token',data.token);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', `Bearer ${data.token}`);
    fetch('http://localhost:8080/user',
        {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
        .then(response => response.json())
        .then(data => dispatch(sendUser(data)))
        .catch(error => console.log(error));
    return {
        type: 'LOGIN',
        payload: data.token
    }
}

const sendUser = (data) => {
    return {
        type: 'USER',
        payload : data
    }
}