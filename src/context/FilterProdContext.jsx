import {  createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProdContext } from "./ProductContext";
import reducer from "../reducerFunc/FilterReducer"

const FilterContext = createContext()

export const FilterContextProvider = ({children})=>{
    const {fullData} = useProdContext()

    // SETTING REDUCER FUNCTION AND INITIALSTATE
    const initialState = {
        "filterProd" : [],
        "allProd" : [],
        "grid_view" : true,
        "sorting_value" : "lowest",
        "filter" :{
            "text" : "",
            "category" : "All",
            "company" : "All",
            "color" : "All",
            "max_val": 0,
            "min_val" : 0,
            "price" : 0,
        }
    }
    const [filterData , dispatch] = useReducer(reducer, initialState)

    // SETTING PRODUCTS DATA IN REDUCERHOOk
useEffect(()=>{
    dispatch({type : "Set_Filter_Data", payload : fullData})
    console.log(filterData)
}, [fullData])


// SETTING RULES FOR GRID OR LIST VIEW
const setGridView = ()=>{
    dispatch({type: "Set_view"})
}
const setListView = ()=>{
    dispatch({type : "Set_list"})
}
// SORTING FUNCTION 
const sorting = (e)=>{
dispatch({type: "Set_Sorting_Value", payload: e.target.value})
}


// UPDATING FILTER WITH INPUTS AND CATEGORY 
const updateFilter = (e)=>{
    let name = e.target.name
    let Inputvalue = e.target.value
    console.log(name, Inputvalue)
    dispatch({type: "Update_filter_inputs", payload: {name, Inputvalue}})
}

useEffect(()=>{
    dispatch({type: "Update_filter_data"})
}, [filterData.filter])



    return(
        <FilterContext.Provider value={{ ...filterData, setGridView, setListView, sorting, updateFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = ()=>{
    return(useContext(FilterContext))
}