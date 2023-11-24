import List from "./components/List";
import { Link, Route, Routes } from "react-router-dom";
import Add from "./components/productadd";
import Edit from "./components/productUpdate";
import { Button } from "./components/ui/button";
import ProductItem from "./components/ProductItem";
import '@/App.css'
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div>
        <div className="topnav">
          <Link className="active" to='/'>
            Home
          </Link>
          <Link to='products'>Products</Link>
          <Link to='products/add'>Thêm sản phẩm</Link>
          <Link to='signup'>Contact Us</Link>
        </div>
        {/* <header className="flex justify-between items-center mb-4">
                <h2 className="text-2xl">Quản lý sản phẩm</h2>
                <Link to='/'>Home</Link><br />
                <Link to='products'>Products</Link><br />
                <Button className="primary p-2 flex justify-between items-center mb-4" >
                    <Link to="products/add">Thêm sản phẩm</Link>
                </Button>
            </header> */}
      </div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="products" element={<List />} />
        <Route path="products/add" element={<Add />} />
        <Route path="products/:id" element={<Edit />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
