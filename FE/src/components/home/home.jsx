
import {Divider,Box} from '@material-ui/core'
import Banner from './banner';
import Slide from './slide';
import {useSelector} from 'react-redux';
import {products }from "../../constants/data.js";
const Home = () => {
    return(
        <Box>
            <Divider/>
            <Banner />
            <Divider/>
            <Slide
            products={products}
            />
        </Box>

       
    )
   
}
export default Home;