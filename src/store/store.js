import { createStore, combineReducers } from "redux";
import {pizzaReducer} from "./pizzaReducer"
import {authReducer} from "./authReducer"


const rootReducer = combineReducers({
    pizzaReducer,
    authReducer
})

export const store = createStore(rootReducer);
