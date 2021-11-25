import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/action/productAction';
import { useParams } from 'react-router-dom'
import { Box, Typography, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    component: {
        marginTop: 60,
        backgroundColor: '#F2f2F2'

    },
    container: {
        margin: '0 80px',
        backgroundColor: 'White',
        display: 'flex',
        '& > *': {
            marginTop: 50
        }
    }

})

export const DetailView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const product = useSelector(state => state.getProductDetailsReducer.product);
   
    console.log(`product`, product)
    const dispatch = useDispatch()
    const classes = useStyles()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getProductDetails(id));
    }, []);

    return (
       
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Box style={{ minWidth: '40%',textAlign:'center' }}>
                    <img src={product.detailUrl} style={{width:300,height:300}}></img>
                    <Typography style={{fontWeight: 'bold'}}>{product.tagline}</Typography>
                    <Typography style={{fontWeight: 'bold',color:'green'}}>{product.discount}</Typography>
                </Box>
                <Box>
                   <Typography  style={{fontWeight: 'bold'}}>{product && product.title?.shortTitle} </Typography> 
                   <Typography  style={{fontWeight: 'bold',marginTop:10}}>{product && product.title?.longTitle}</Typography>
                    
                    <Typography style={{ fontWeight: 'bold',marginTop:10 }}> {product.description} </Typography >
                   
                    <span><img style={{ width: 80 ,marginTop:10}} src={fassured}></img></span>
                    
                    <Typography  style={{fontWeight: 'bold',marginTop:10}}>₹{product && product.price?.mrp}</Typography>
                    <Typography  style={{color:'green',marginTop:10}}>Discount {product && product.price?.discount}</Typography>
                </Box>
            </Box>
        </Box>

    )


}

=======
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/action/productAction';
export const DetailView = () =>{

    const product = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getProductDetails());
    },[dispatch]);
    return(
        <div>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
         </div>
    )
       
        
}
>>>>>>> 197d568b0737c4b2478db4fc46373df3a974dc0e
