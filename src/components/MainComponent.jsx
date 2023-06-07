import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../utilities/formatPrice';

const MainComponent = () => {
    const dispatch = useDispatch()
    const {pizza, basket} = useSelector(state => state.pizzaReducer)
    const {isAuth} = useSelector(state=>state.authReducer)


    const checkArray = (arr, index)=>{
        return arr.some(elem=>{
            return elem.id === index
        })
    }

    const addPizza = (index,id) => {
        const obj = {
            img: pizza[index].img,
            name: pizza[index].name,
            price: pizza[index].price,
            id: pizza[index].id,
            qty: 1
        }
        if(basket.length){
            if(checkArray(basket,id)){
                dispatch({type:"ADD_QTY",payload: id})
            }else{

                dispatch({type: "ADD_PIZZA", payload: obj})
            }
        }else {
            
            dispatch({type: "ADD_PIZZA", payload: obj})
        }

    }
    return (
        <div className='main__block'>
            <div className='main__block-leftHero'>
                <img src="./assets/img/cover_man.svg" alt="hero" />
            </div>
            <div className='main__block-rightHero'>
                <img src="./assets/img/cover_woman.svg" alt="hero" />
            </div>
            <section className='main__container container'>
                <h2 className="main__header">Пицца</h2>
                <div className="card__block">
                    {pizza.map((item,index)=>(
                    <div key={index} className="card__item">
                        <div className="item__img">
                            <img src={item.img} alt="img" />
                        </div>
                        <div className="item__info">
                            <div className='item__info-block'>
                                <h4 className="item__info-header">{item.name}</h4>
                                <p className="item__info-descr">{item.descr}</p>
                                <div className="info__actions">
                                    <p className="info__actions-rating">Рейтинг: <strong>{item.rating}</strong></p>
                                    <p className="info__actions-price">{formatPrice(item.price)}</p>
                                </div>
                            </div>
                            {isAuth && <button className='item__info-btn btn' onClick={()=>addPizza(index,item.id)}> В корзину</button>}
                            
                        </div>
                    </div>

                    ))}
                </div>
            </section>            
        </div>
    );
};

export default MainComponent;