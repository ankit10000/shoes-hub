import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import AdminPanel from './adminPanel/AdminPanel'
import Carsoul from './components/Carsoul'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product  />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path='/adminpanel' element={<AdminPanel/>} />
        <Route path='/carsoul' element={<Carsoul/>} />
      </Routes>
    </Router>
  );
}

export default App;