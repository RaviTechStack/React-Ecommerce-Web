import { useContext, createContext, useState, useEffect, useReducer } from "react";
import reducer from "../reducerFunc/ProdReducer"

export const ProductContext = createContext()

export const ProdContextProvider = ({children})=>{
    const initialState = {
        "isLoading" : false,
        "fullData" : [],
        "featureProd" : [],
        "isErr" : false,
        "SingleProduct" : {},
        "grid_view" : false
    }
    const [data, dispatch] = useReducer(reducer, initialState)
    const apiData = async()=>{
        try{
        dispatch({type : "isLoading"})
        const prodData = await fetch("https://api.pujakaitem.com/api/products")
        const allProdData = await prodData.json()
        dispatch({type : "Put_Data", payload : allProdData})
}catch(err){
    dispatch({type: "Err"})
}
}

const [selValue, setselValue] = useState("")
const setValue = (para) =>{
    setselValue(para.target.value)
    console.log(para.target.value)
}

const singleData = async(url)=>{
    try{
        dispatch({type : "isLoading"})
        const singleprod = await fetch(url)
        const res = await singleprod.json()
        dispatch({type : "single_data", payload : res})
    }catch{
        dispatch({type: "Err"})
    }
}
    useEffect(()=>{
    apiData()
    }, [])
    
const setGridView = ()=>{
    dispatch({type: "Set_view"})
}
const setListView = ()=>{
    dispatch({type : "Set_list"})
}

    return(
        <ProductContext.Provider value={{...data, singleData,setGridView, setListView, setValue}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProdContext =()=>{
 return(useContext(ProductContext))
}