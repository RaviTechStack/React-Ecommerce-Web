const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add_Cart_Data":
            const { culur, count, data } = action.payload
            let existData = state.cart.find((curEle) => curEle.id == data.id + culur)
            if (existData) {
                let upadtedCart = state.cart.map((currEle) => {
                    if (currEle.id === data.id + culur) {
                        let newQuantity = currEle.cartCount + count
                        if (newQuantity >= data.stock) {
                            newQuantity = data.stock
                        }
                        return {
                            ...currEle,
                            "cartCount": newQuantity
                        }
                    } else {
                        return currEle
                    }
                })
                return {
                    ...state,
                    "cart": upadtedCart
                }
            }
            let singleCart = {
                "id": data.id + culur,
                culur,
                "cartCount": count,
                "price": data.price,
                "name": data.name,
                "image": data.image[0].url,
                "stock": data.stock

            }
            console.log(state.cart)
            return {
                ...state,
                "cart": [...state.cart, singleCart]

            };
        case "Decrement_Value":
            let NewCart = state.cart.map((curEle) => {
                if (curEle.id == action.payload) {
                    let newCartQuantity = curEle.cartCount - 1
                    if (newCartQuantity <= 1) {
                        newCartQuantity = 1
                    }
                    return {
                        ...curEle,
                        "cartCount": newCartQuantity
                    }
                }
                else {
                    return curEle
                }
            })
            return {
                ...state,
                "cart": NewCart
            }
        case "Incremen_value":
            let newIncrementedData = state.cart.map((curEle) => {
                if (curEle.id === action.payload) {
                    console.log("stock", curEle.stock)

                    let newCartQuantity = curEle.cartCount + 1
                    if (newCartQuantity >= curEle.stock) {

                        newCartQuantity = curEle.stock
                    }
                    return {
                        ...curEle,
                        "cartCount": newCartQuantity
                    }
                } else {
                    return curEle
                }
            })
            return {
                ...state,
                "cart": newIncrementedData
            }
        case "Update_cart_count":
            let newCartValue = state.cart.reduce((initial, curEle) => {
                return (initial + curEle.cartCount)
            }, 0)
            console.log(newCartValue)
            return {
                ...state,
                "CartValue": newCartValue
            }
        case "Delete_item":
            let upadtedData = state.cart.filter((curEle) => (curEle.id !== action.payload))
            return {
                ...state,
                "cart": upadtedData
            }


        case "erre":
            let newCartAmount = state.cart.reduce((initial, curEle) => {
                return (initial + (curEle.cartCount * curEle.price))
            }, 0)
            return {
                ...state,
                "cartAmount": newCartAmount
            }
        case "clear_cart":
            return{
                ...state,
                "cart" : []
            }
        default:
            return {
                state
            };
    }
}

export default CartReducer