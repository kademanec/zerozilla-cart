import { useState,useEffect } from "react";
import Nav from './NavBar';
import { useNavigate } from 'react-router-dom';
const Home = ()=>{
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const handleClick=(event,key)=>{
        navigate('/ProductDetails',
        {
            state:categories[key],
        },
        );
    }
    useEffect(()=>{
            async function getData(){
                const data = await fetch('https://fakestoreapi.com/products/categories');
                const rData = await data.json();
                setCategories(rData);
            }
            getData();

        },[])
    return(
        <div>      
        <Nav/>
            <div className= "categories">
                <h1> Categories : {categories.map((element, key) => (
                    <div onClick={event => handleClick(event, key)} key={key} className="list">
                      {element}
                    </div>
                  ))}</h1> 
            </div>
        </div>
    )
}

export default Home;