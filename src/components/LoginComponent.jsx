import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderComponent from './UI/LoaderComponent';

const LoginComponent = () => {
    const {isLoading} = useSelector(state=>state.authReducer)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const closeModal =()=>{
        dispatch({type: "SHOW_MODAL", payload: false})
    }


    const login = (e) =>{
        e.preventDefault()
        if(name.length && password.length){
            dispatch({type:"REGISTER", payload: {name: name, password: password}})
            dispatch({type:"LOGIN_LOGOUT", payload: true})
            dispatch({type:"LOADING", payload: true})
            setTimeout(() => {
                dispatch({type:"LOADING", payload: false})
                dispatch({type: "SHOW_MODAL", payload: false})
            }, 1500);
            localStorage.setItem('auth', 'true')
            localStorage.setItem('name', name)
        }

    }

    return (
        <div className='login__test'>
            <div className='login__block'>
                <div className="login__block-heading">
                    <h3 className="login__header">Вход на сайт</h3>
                    <img onClick={closeModal} src="./assets/icons/close.png" alt="close" />
                </div>
                {isLoading
                ?
                <LoaderComponent size={60}/>
                :
                <form className='login__form'>
                    <div className="login__form-name">
                        <label htmlFor="inputName">Логин</label>
                        <input id='inputName' type="text" onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="login__form-psw">
                        <label htmlFor="inputPsw">Пароль</label>
                        <input id='inputPsw' type="text" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className='login__form-send'>
                        <button className='login__form-btn btn' onClick={login}>Войти</button>
                        <p className='login__form-text'>Продолжая, вы соглашаетесь <span>со сбором и обработкой персональных данных и пользовательским соглашением</span></p>
                    </div>
                </form>
                }
            </div>
        </div>

    );
};

export default LoginComponent;