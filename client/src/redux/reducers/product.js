const reducer = function(state = {
    title: null,
    description: null,
    price: null,
    vote: null
}, action){
    switch(action.type){
        case 'ADD_PRODUCT':
            return Object.assign({}, state, {
                title: state.title,
                description: state.description,
                price: state.price,
                vote: state.vote
            });
        default:
            return state;
    }
};

export default reducer;