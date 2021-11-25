import Productsdata from '../model/productschema.js';
export const getProducts = async (request ,response) => {
    try{
       const products =await Productsdata.find({})
       response.json(products)
    }
    catch(error){
        console.log('Error :',error.message);
    }
 }
 export const getProductsById = async (request , response) => {
<<<<<<< HEAD
    //console.log(request.params.id)
=======
    console.log(request.params.id)
>>>>>>> 197d568b0737c4b2478db4fc46373df3a974dc0e
    try {
        const product_response = await Productsdata.findOne({'id':request.params.id})
        console.log(product_response)
        response.json({product:product_response})
    }
    catch(error){
        console.log("Error: ",error.message);
    }
 }