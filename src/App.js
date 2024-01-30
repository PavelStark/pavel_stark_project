import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPages from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import AllSalesPage from "./pages/AllSalesPage";
import EmptyBasketPage from "./pages/EmptyBasketPage.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/categories/all" element={<CategoriesPage />}/>
        <Route path="/products/all" element={<ProductsPages />}/>
        <Route path="sales/all" element={<AllSalesPage/>}/>
        {<Route path="emptyBasket/" element={<EmptyBasketPage/>}/>}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
