import { useState, useEffect } from 'react';
import {Search} from '@material-ui/icons';
import { makeStyles, InputBase, List, ListItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/action/productAction';
import { Link } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'

  },
  searchIcon: {
    marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%'
  },
  inputInput: {
    paddingLeft: 20,
    width: '100%',
  },
}));

const SearchBar = () => {

  const  classes = useStyle()

return(
    <div className={classes.search}>
           
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <div className={classes.searchIcon}>
              <Search />

            </div>
    
          </div>
         
)

}
export default  SearchBar;




// import { useState, useEffect } from 'react';
// import {Search} from '@material-ui/icons';
// import { makeStyles, InputBase, List, ListItem } from '@material-ui/core';
// import { useSelector, useDispatch } from 'react-redux'; // hooks
// import { Link } from 'react-router-dom';
// import { getProducts as listProducts } from '../../redux/action/productAction';




// const useStyle = makeStyles((theme) => ({
//   search: {
//     borderRadius: 2,
//         marginLeft: 10,
//         width: '38%',
//         backgroundColor: '#fff',
//         display: 'flex'

//   },
//   searchIcon: {
//     marginLeft: 'auto',
//         padding: 5,
//         display: 'flex',
//         color: 'blue'
//   },
//   inputRoot: {
//     fontSize: 'unset',
//     width: '100%'
//   },
//   inputInput: {
//     paddingLeft: 20,
//     width: '100%',
//   },
// }));

// const SearchBar = () => {

//   const  classes = useStyle()
//   const getProducts = useSelector(state => state.getProducts)
//   const { products} = getProducts;
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//       dispatch(listProducts())
//   } ,[dispatch])
//    const [text , setText] =useState()

//    const getText= (text) => {
//      setText(text)
//    }

// return(
//     <div className={classes.search}>
           
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//               onChange={(e) => getText(e.target.value)}
//             />
//              <div className={classes.searchIcon}>
//               <Search />
//             </div>
//             {
//               text && 
//               <List>
//                 {
//                   products && products.filter(product => product.title.longTitle.toLowerCase().include(text?.toLowerCase()).map(product => 
//                     <ListItem>
//                       { product.title?.longTitle}
//                     </ListItem>
                    
//                     ))
//                 }
                  
//               </List>
//             }
    
//           </div>
         
// )

// }
// export default  SearchBar;