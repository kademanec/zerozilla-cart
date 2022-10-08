import { useState,useEffect } from "react";
import Nav from './NavBar';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetail = ()=>{
   const [details,setDetails]= useState([]);
   const [count,setCount]=useState(0);
   const {state} = useLocation();
   const data = state;
   
   useEffect(()=>{
        async function details(){
            const getData = await fetch(`https://fakestoreapi.com/products/category/${data}`);
            const realData = await getData.json();
            setDetails(realData);
        }
    details();
   },[])

    return(
        
        <div>
            <Nav/>
            <div className="cart-count">
                <FaShoppingCart className="fas" /> 
                <p className="cartcount"> {count}</p>
            </div>
            <div>
                <h1 className="productPage">{data.toUpperCase()}</h1>
              <div className="cards">
                {
                    details.map((value)=><div className="card">
                        <h1>{value.title}</h1>
                        <p className="price">Price:{value.price}</p>
                        <p>{value.description}</p>
                        <p><button onClick={(event)=>{setCount(count+1)}}>Add to Cart</button></p>
                  </div>)
                }
             </div>
            </div>
        </div>
    )

}
export default ProductDetail;