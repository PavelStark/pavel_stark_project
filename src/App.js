import "./App.css";
import Footer from "./components/2_Footer/index.jsx";
import Header from "./components/1_Header/index.jsx";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/1_MainPage/index.jsx";
import NotFoundPage from "./pages/5_NotFoundPage/index.js";
import ProductsPages from "./pages/3_ProductsPage/index.jsx";
import CategoriesPage from "./pages/2_CategoriesPage/index.js";
import AllSalesPage from "./pages/4_AllSalesPage/index.jsx";
import ProductsListPage from "./pages/3_1_CategoryProductsPage/index.jsx";
import SingleProductPage from "./pages/3_2_SigleProductPage/index.jsx";
import CartPage from "./pages/7_CartPage/index.jsx";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/categories/all" element={<CategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsListPage />}/>
        <Route path="/products/all" element={<ProductsPages />}/>
        <Route path="/products/:id" element={<SingleProductPage />}/>
        <Route path="/sales/all" element={<AllSalesPage />}/>
        <Route path="/cart/" element={<CartPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
