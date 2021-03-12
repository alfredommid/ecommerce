import React, {useReducer, useContext, createContext} from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    const newArr = [...state]
    
    switch(action.type){
        case "ADD":
            return [...state, action.item];
        case "REMOVE":
            newArr.splice(action.index, 1);
            return newArr;
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}
//eslint-disable-next-line
const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, []);
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

const useCart = () => useContext(CartStateContext);
const useDispatchCart = () => useContext(CartDispatchContext);


export {
    CartProvider,
    useCart,
    useDispatchCart
} 