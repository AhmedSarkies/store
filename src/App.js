// Import Libraries
import { Routes, Route, Outlet } from "react-router-dom";

// Import Components
import Navbar from "./Components/component/Navbar";
import Sidebar from "./Components/component/Sidebar";
import Slider from "./Components/component/Slider";

// Import Pages
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Categories from "./Components/Pages/Categories";

// Import Style
import "./Style/css/main.css";
import AddProduct from "./Components/Pages/AddProduct";
import ProductDetails from "./Components/Pages/ProductDetails";
import EditProduct from "./Components/Pages/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />} />
      </Routes>
      <div className="row col-12">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-2 left-side">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Outlet />}>
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productID" element={<EditProduct />} />
              <Route path=":productID" element={<ProductDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
