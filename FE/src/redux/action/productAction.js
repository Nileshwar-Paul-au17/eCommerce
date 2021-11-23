
import axios from 'axios'
import * as action from '../../constants/productconstant';
const url = 'https://localhost:4000';
export const getProductsReducer = async (dispatch) =>{
    try{
        const {data} = await axios.get(`${url}/products`)
        dispatch({type: action.GET_PRODUCTS_SUCCESS ,payload:data})
    }
    catch(error){
        dispatch({type: action.GET_PRODUCTS_FAILURE ,payload: error.response})
    }
}