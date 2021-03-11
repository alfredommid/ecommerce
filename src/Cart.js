import React, {useReducer, useContext, createContext} from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch(action.type){
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