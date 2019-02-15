import { combineReducers } from "redux"
import securityReducer from "./security"
import productReducer from "./product"

const rootReducer = combineReducers({
    security: securityReducer,
    product: productReducer
});

export default rootReducer;
