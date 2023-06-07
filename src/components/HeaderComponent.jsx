import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HeaderComponent = () => {
  const {isAuth, user: {name}, showBurger} = useSelector(state=>state.authReducer)
  const {defaultPizza} = useSelector(state=>state.pizzaReducer)
  const {basket} = useSelector(state=>state.pizzaReducer)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()



  const showModal = ()=>{
    dispatch({type: "SHOW_MODAL", payload: true})
  }

  const showBasket = ()=>{
    dispatch({type: "SHOW_BASKET"})
  }
  const openMenu = ()=>{
    dispatch({type: "SHOW_BURGER"})
  }
  const logout = ()=>{
    dispatch({type:"LOGIN_LOGOUT", payload: false})
    dispatch({type:"REGISTER", payload: {name: "", password: ""}})
    localStorage.setItem('auth', 'false')
    localStorage.setItem('name', '')

  }
  useEffect(()=>{
    if(!search.length){
      dispatch({type:"CREATE", payload: defaultPizza})
    }else{
    dispatch({type: "SEARCH_PIZZA", payload: search})

    }
  },[search])
    return (
        <div className='header__block'>
            <header className='header__container container'>
                <div className="header__logo">
                    <img src="./assets/img/logo.png" alt="logo" />
                </div>
                <div className="header__search">
                    <input onChange={(e)=>setSearch(e.target.value)} className='header__search-input' type="text" placeholder='Найди свою пиццу' />
                    <img className='header__search-img' src="./assets/icons/exti-1.svg" alt="clear" />
                </div>
                    {isAuth
                    ?
                    <div className="header__login">
                    <p className='header__login-username'>Добро пожаловать, {name}!</p>
                    <button className='header__login-login btn' onClick={logout}>Выйти</button>
                    <button className='header__login-basket btn'>
                        <span onClick={showBasket} className='basket__name'>Корзина</span>
                        <span className='basket__line'>|</span>
                        <span className='basket__qty'>{basket.length}</span>
                    </button>
                    </div>
                    :
                    <div className="header__login">
                    <button className='header__login-login btn' onClick={showModal}>Войти</button>
                    </div>
                    }
            </header>
            <header className="burger__container container">
              <div className="header__logo">
                <img src="./assets/img/logo.png" alt="logo" />
              </div>
              <div className="header__search">
                    <input onChange={(e)=>setSearch(e.target.value)} className='header__search-input' type="text" placeholder='Найди свою пиццу' />
                </div>
              {showBurger
                ?
                <div className="burger__icons" onClick={openMenu}>
                  <img src="./assets/icons/menu.svg" width={30} alt="menu" />
                </div>
                :
                <div className="burger__icons" onClick={openMenu}>
                  <img src="./assets/icons/exit.svg" width={30} alt="exit" />
                </div>
              }
            </header>
             <nav className={["header__menu container", !showBurger && " menu__active"]}>
            {isAuth
                    ?
                    <div className="header__login">
                    <p className='header__login-username'>Добро пожаловать, {name}!</p>
                    <button className='header__login-login btn' onClick={logout}>Выйти</button>
                    <button className='header__login-basket btn'>
                        <span onClick={showBasket} className='basket__name'>Корзина</span>
                        <span className='basket__line'>|</span>
                        <span className='basket__qty'>{basket.length}</span>
                    </button>
                    </div>
                    :
                    <div className="header__login">
                    <p className='header__login-username'>Добро пожаловать, Гость!</p>
                    <button className='header__login-login btn' onClick={showModal}>Войти</button>
                    </div>
                    }
              </nav>
            
        </div>
    );
};

export default HeaderComponent;
