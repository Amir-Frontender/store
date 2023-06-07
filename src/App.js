import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "./components/HeaderComponent";
import LoginComponent from "./components/LoginComponent";
import MainComponent from "./components/MainComponent";
import { useEffect } from "react";
import BasketComponent from "./components/BasketComponent";
import FooterComponent from "./components/FooterComponent";
import CarouselComponent from "./components/UI/CarouselComponent";

function App() {
  
  const {showLogin, showBasket} = useSelector(state=>state.authReducer)
  const {isAuth, user:{name}} = useSelector(state=>state.authReducer)
  const {defaultPizza} = useSelector(state=>state.pizzaReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type: "CREATE", payload:defaultPizza})
  }, [])

  useEffect(()=>{
    if(localStorage.getItem('auth') === 'false'){
      dispatch({type: 'LOGIN_LOGOUT', payload: false})
    }else if(localStorage.getItem('auth') === 'true'){
      dispatch({type: 'LOGIN_LOGOUT', payload: true})
      dispatch({type: 'REGISTER', payload:{name: localStorage.getItem('name'), password: ""} })
    }
  },[isAuth,name])
  return (
    <div className="App">
      <HeaderComponent/>
      <CarouselComponent/>
      <MainComponent/>
      {showLogin && <LoginComponent/>}
      {showBasket && <BasketComponent/>}
      <FooterComponent></FooterComponent>
            
    </div>
  );
}

export default App;
