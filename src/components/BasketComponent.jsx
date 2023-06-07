import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderComponent from './UI/LoaderComponent';
import { formatPrice } from '../utilities/formatPrice';

const BasketComponent = () => {
    const {basket} = useSelector(state=> state.pizzaReducer)
    const {isLoading, user:{name}} = useSelector(state=>state.authReducer)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    
    const order=()=>{
        if(total > 0){
            dispatch({type:"LOADING", payload: true})
            alert(`Спасибо, ${name} за Ваш заказ.\nИтоговая сумма к оплате: ${total} сум.\nНаш менеджер свяжется с Вами в ближайшее время`)
            dispatch({type:"LOADING", payload: false})
        }
    }

    const showBasket = ()=>{
        dispatch({type: "SHOW_BASKET"})
    }

    const clear = ()=>{
        dispatch({type:"LOADING", payload: true})
        dispatch({type:'CLEAR_ALL'})
        setTimeout(() => {
            dispatch({type:"LOADING", payload: false})
            dispatch({type: "SHOW_BASKET"})
        }, 1500);
        setTotal(0)
    }

    const increment = (id) =>{
        dispatch({type: "ADD_QTY", payload: id})
    }
    const decrement = (id) =>{
        dispatch({type: "REDUCE_QTY", payload: id})
    }

    const removeItem=(id)=>{
        dispatch({type: "REMOVE_ITEM", payload: id})
    }
    useEffect(()=>{
        if(basket.length === 1) {
            setTotal((basket[0].qty * basket[0].price))
        } else if (basket.length > 1) {
            let result = basket.reduce((accum,curr)=>{
                return accum + (curr.qty * curr.price)
            },0)
           setTotal(result) 
        }
    }, [basket])
    return (
        <div className='basket__block'>
            <div className="basket__heading">
                <h3 className="basket__heading-header">Корзина</h3>
                <img onClick={showBasket} src='./assets/icons/close.png' alt='close' className="basket__heading-exit"></img>
            </div>
            {isLoading
            ?
            <LoaderComponent size={60}/>
            :
            <div className="basket__item">
                {basket.map((item, index)=>(
                    <div key={index + "-" + item.id} className='basket__position'>
                        <p className='position__name'>{item.name}</p>
                        <p className='position__price'>{formatPrice(item.price * item.qty)}</p>
                        <div className='position__qty'>
                            <button onClick={()=>decrement(item.id)} className='position__qty-btn_decr'>-</button>
                            <p className='position__qty-qty'>{item.qty}</p>
                            <button onClick={()=>increment(item.id)} className='position__qty-btn_incr'>+</button>
                        </div>
                        <img onClick={()=>removeItem(item.id)} className='position__img_close' src="./assets/icons/close-pos.png" alt="close" />
                    </div>
                ))}
            </div>

            }
            <div className="basket__sum">
                <p>Итого: {formatPrice(total)}</p>
            </div>
            <div className="basket__order">
                <button className='basket__order-order btn' onClick={order}>Офоримть заказ</button>
                <button className='basket__order-cancel btn' onClick={clear}>Отмена</button>
            </div>

        </div>
    );
};

export default BasketComponent;