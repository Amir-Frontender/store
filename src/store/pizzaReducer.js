const defaultState = {
    defaultPizza: [
        {img: './assets/img/pizza_1.jpg', name: 'Комби', descr: 'Мясной деликатес, ветчина, говяжья, салями, сосиски куриные, шампиньоны, оливки, сыр Гауда', price: 145000, id: 1, rating: 5},
        {img: './assets/img/pizza_2.jpg', name: 'Мексико', descr: 'Филе куриное, ветчина говяжья, укроп, перец, чили, сыр Гауда', price: 142000, id: 2, rating: 4.5},
        {img: './assets/img/pizza_3.png', name: 'Куриная', descr: 'Филе куриное, помидоры, шампиньоны, сыр Гауда', price: 142000, id: 3, rating: 4.4},
        {img: './assets/img/pizza_4.jpg', name: 'Пепперони', descr: 'Пепперони, соус, сыр Гауда', price: 140000, id: 4, rating: 5},
        {img: './assets/img/pizza_5.jpg', name: 'Moscow', descr: 'Мясо говяжье, шампиньоны, сыр Хохланд, сыр Гауда', price: 192000, id: 5, rating: 4.8},
        {img: './assets/img/pizza_6.jpg', name: 'Гавайская', descr: 'Ветчина говяжья, ананасы, лук, соус, сыр Гауда', price: 148000, id: 6, rating: 4.1},
        {img: './assets/img/pizza_7.jpg', name: 'Маргарита', descr: 'Помидоры, соус, сыр Гауда', price: 118000, id: 7, rating: 4.6},
        {img: './assets/img/pizza_8.jpg', name: 'Американо', descr: 'Салями, пепперони, ветчина говяжья, шампиньоны, соус, сыр Гауда', price: 160000, id: 8, rating: 4.2},
        {img: './assets/img/pizza_9.jpg', name: 'Хантер', descr: 'Охотничьи колбаски, филе куриное, огурцы маринованные, шампиньоны, сыр Гауда', price: 142000, id: 9, rating: 4},
        {img: './assets/img/pizza_10.jpg', name: 'Куатр Стажионе', descr: 'Ветчина говяжья, охотничьи колбаски, шампиньоны, помидоры, сыр Гауда', price: 150000, id: 10, rating: 4.8},
        {img: './assets/img/pizza_11.jpg', name: 'Жульен', descr: 'Филе куриное, шампиньоны, лук, сыр Хохланд, сыр Гауда, сливочный соус ', price: 160000, id: 11, rating: 4.1},
        {img: './assets/img/pizza_12.jpg', name: 'Вегета', descr: 'Помидоры, болг.перец, шампиньоны, кукуруза, оливки, сыр Гауда ', price: 135000, id: 12, rating: 4.5},
    ],
    pizza: [],
    basket: []
}

export const pizzaReducer = (state = defaultState, action)=>{
    switch (action.type) {
        case "CREATE":
        return{...state, pizza: action.payload}

        case "ADD_PIZZA":
            return {...state, basket:[...state.basket, action.payload]}

        case "CLEAR_ALL": {
            return {...state, basket: []}
        }

        case "ADD_QTY":
            return {...state, 
                basket: state.basket.map((item)=>{
                    if(item.id === action.payload){
                        return {...item, qty: item.qty + 1}
                    }
                    return item
                })
            }
        case "REDUCE_QTY":
            return {...state, 
                basket: state.basket.map((item)=>{
                    if(item.id === action.payload && item.qty >1){
                        return {...item, qty: item.qty - 1}
                    }
                    return item
                })
            }

        case "REMOVE_ITEM":
            return{...state,
                basket: state.basket.filter((item)=>{
                    return item.id !== action.payload
                    
                }) 

            }
        case "SEARCH_PIZZA":
            return {...state,
            pizza: state.defaultPizza.filter(elem =>{
                return elem.name.toLowerCase().includes(action.payload.toLowerCase())
            })}
        default:
            return state
    }
}