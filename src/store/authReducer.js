const defaultState = {
    isAuth: false,
    user: {name: '', password: ''},
    showLogin: false,
    showBasket: false,
    showLoader: false,
    showBurger: true,
    isLoading: false,
}

export const authReducer = (state = defaultState, action)=>{
    switch (action.type) {
        case "LOGIN_LOGOUT":
            return {...state, isAuth: action.payload}
        case "LOADING":
            return {...state, isLoading: action.payload}
        case "SHOW_MODAL":
            return {...state, showLogin: action.payload}
        case "REGISTER":
            return {...state, user: {...action, name: action.payload.name, password: action.payload.password}}
        case "SHOW_BASKET":
            return{...state, showBasket: !state.showBasket}
        case "SHOW_BURGER":
            return{...state, showBurger: !state.showBurger}
        default:
            return state
    }
}