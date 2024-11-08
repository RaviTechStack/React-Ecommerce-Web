import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducerFunc/CartReducer"

export const CartContext = createContext();

export const CartoContextProvider = ({children})=>{
    const getCartItem = ()=>{
        let CartStorage = localStorage.getItem("cartItem")
        if(!CartStorage){
            return []
        }
        else{
        return JSON.parse(CartStorage)

        }
    }
const initialState = {
    "cart" : getCartItem(),
    "CartValue" : 0,
    "cartAmount" : 0,
    "deliveryFees": 0,
    "Discount" : 0
}

    const [cartData , dispatch] = useReducer(reducer, initialState)

    const addData = (data, culur, count)=>{
        return(
            dispatch({type: "Add_Cart_Data", payload : {culur, count, data}})
        )
    }
    const deleteItem = (id)=>{
        dispatch({type: "Delete_item", payload: id})
    }
    const decrement =(id)=>{
        dispatch({type: "Decrement_Value", payload: id})
    }
    const increment =(id)=>{
        dispatch({type : "Incremen_value", payload: id})
    }
    useEffect(()=>{
        dispatch({type: "Update_cart_count"})
        dispatch({type: "erre"})
        localStorage.setItem("cartItem", JSON.stringify(cartData.cart))
    }, [cartData.cart])

    const clearCart = ()=>{
        console.log("read")
        dispatch({type: "clear_cart"})
    }
   
return(
    <CartContext.Provider value={{...cartData, addData, deleteItem, decrement,increment, clearCart}}>
        {children}
    </CartContext.Provider>
)
}

export const useCartContext =()=>{
    return(useContext(CartContext))
}