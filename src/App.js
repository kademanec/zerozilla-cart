import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './Products';
import ProductDetail from './ProductDetail';
function App() {
  return (
  <Router>
    <div className="App">
      <div className = "content">
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route path="/ProductDetails" element={<ProductDetail/>}></Route>
          <Route path="/Products" element={<Products/>}></Route>
        </Routes>
      </div> 
    </div>
  </Router>
  );
}

export default App;
