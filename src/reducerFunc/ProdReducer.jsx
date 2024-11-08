// const ProdReducer = async(state, action)=>{
//      const recdata = await action.payload
//     const featured = recdata.filter((curr)=>{
//         curr.featured === true
//     })
    
//     switch (action.type) {
//         case "Put_Data":
//             return{
//                 ...state, "fullData" : recdata, "isLoading": false
//             }
//         case "isLoading":
//             return{...state, "isLoading":true}
//         case "Err":
//             return{...state, "isErr": true}
            
    
//         default:
//             return state;
//     }
//     return state

// }
const ProdReducer =  (state, action) => {
    

    switch (action.type) {
        case "Put_Data":
            const recdata =  action.payload;
    const featured = recdata.filter(curr => curr.featured === true);
            return {
                ...state, "fullData": recdata, "featureProd": featured, "isLoading": false
            };
        case "isLoading":
            return { ...state, "isLoading": true };
        case "Err":
            return { ...state, "isErr": true };
        case "single_data":
            return{...state, "isLoading": false, "SingleProduct": action.payload};
        default:
            return state;
    }
};

export default ProdReducer;

// export default ProdReducer