import * as actionType from '../constants/productConstant';

export const getProductsReducer = (state= {products:[]} ,action) => {
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return ({products :action.payload})
        case actionType.GET_PRODUCTS_FAILURE:
            return ({products :action.payload})
        default:
            return state
    }
};

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
<<<<<<< HEAD
            return { ...state, loading: true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {
                ...state,
=======
            return { loading: true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {
>>>>>>> 197d568b0737c4b2478db4fc46373df3a974dc0e
                loading: false,
                error: action.payload
            }
        case actionType.GET_PRODUCT_DETAILS_RESET: 
            return {
<<<<<<< HEAD
                ...state,
=======
>>>>>>> 197d568b0737c4b2478db4fc46373df3a974dc0e
                product: {}
            }
        default:
            return state
    }
}