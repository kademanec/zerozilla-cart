import Nav from './NavBar';
import {useEffect, useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
const Products = ()=>{

    const [items,setItems]=useState([]);
    const [selectItems,setSelectItems]= useState([]);
    const [count,setCount]=useState(0);
    useEffect(()=>{
        async function details(){
            const getData = await fetch(`https://fakestoreapi.com/products`);
            const realData = await getData.json();
            setItems(realData);
        }
    details();
   },[])

    const sortItems = (event)=>{
        const value = items.filter((element)=>element.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setSelectItems(value);
    }

    return(
        <div>
            <Nav/>
            <div className="cart-count">
                <FaShoppingCart className="fas" /> 
                <p className="cartcount"> {count}</p>
            </div>
            <div className = "search">
                <label>Search :  </label>
                <input type="text" onChange={(event)=>sortItems(event)}/>
                {
                    selectItems.map((value)=><div className="card">
                        <h1>{value.title}</h1>
                        <p className="price">Price:{value.price}</p>
                        <p>{value.description}</p>
                        <p><button onClick={(event)=>{setCount(count+1)}}>Add to Cart</button></p>
                  </div>)
                }
            </div>
        </div>
    )

}
export default Products;