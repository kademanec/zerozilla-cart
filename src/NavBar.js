import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';

const Nav = ()=>{


    return(
        <div className="nav-bar">
            <ul className = "list-items">
                <div className="list-item"><a href={"/"}>Home</a></div>
                <div className="list-item"><a href="#">Cart</a></div>
                <div className="list-item"><a href={"/Products"}>Products </a></div>
                <div className="list-item"><a href="#">Profile</a></div>
                
            </ul>
        </div>  
    )
}

export default Nav;