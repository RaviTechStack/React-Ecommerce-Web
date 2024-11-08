import Color from "../components/colors/Color";

const FilterReducer = (state, action) => {
    
    switch (action.type) {
        case "Set_Filter_Data":
            let Allprice = action.payload.map((currEle)=>(currEle.price))
            let max_val = Math.max(...Allprice)
            let min_val = Math.min(...Allprice)
            

            return {
                ...state,
                "filterProd": [...action.payload],
                "allProd" : action.payload,
                "filter" : {
                    ...state.filter,
                     max_val,
                     min_val,
                    "price" : max_val
                }
              
                
            };
        case "Set_view":
            return { ...state, "grid_view": true };
        case "Set_list":
            return { ...state, "grid_view": false };
        case "Set_Sorting_Value":
            let {filterProd} = state
            let value = action.payload
            let sortedData = filterProd
            const sortingFunct = (a, b)=>{
                if(value == "a-z"){
                    return a.name.localeCompare(b.name)
                }
                if(value == "z-a"){
                    return b.name.localeCompare(a.name)
                }
                if(value == "lowest"){
                    return a.price - b.price
                }
                if(value == "highest"){
                    return b.price - a.price
                }
            }

            sortedData.sort(sortingFunct)
            return {
                ...state,
                "filterProd" : sortedData

            };
            case "Update_filter_inputs":
                const {name, Inputvalue} = action.payload
                return{
                    ...state,
                    filter:{
                        ...state.filter, 
                        [name] : Inputvalue
                    }
                };
                case "Update_filter_data":
                    const {text, category, company, color, price} = state.filter
                    let { allProd } = state
                    let dummyData = [...allProd]
                    // let dummyData = allProd.filter((currEle)=>{
                    //     return (
                    //     (!text || currEle.name.toLowerCase().includes(text.toLowerCase())) &&
                    //     (!category || currEle.category === category) &&
                    //     (!company || currEle.company === company)
                    // )})
                    dummyData = allProd.filter((currEle)=>(
                        currEle.price <= price
                    ))
                    if(text){
                        dummyData = allProd.filter((currEle)=>(
                            currEle.name.toLowerCase().includes(text.toLowerCase())
                        ))
                    }
                    
                    if(category && category !== "All"){
                        dummyData = allProd.filter((currEle)=>(
                            currEle.category === category
                        ))
                    }
                    if(company && company !== "All"){
                        dummyData = allProd.filter((currEle)=>(
                            currEle.company === company
                            
                        ))
                    }
                    if(color && color!== "All"){
                        dummyData = allProd.filter((currEle)=>(
                            currEle.colors.includes(color)
                        ))
                    }
                    
                        
                        console.log(dummyData)
                    return{
                        ...state,
                        "filterProd" : [...dummyData]
                        
                    }
        default:
            return { ...state }
    }
}
export default FilterReducer