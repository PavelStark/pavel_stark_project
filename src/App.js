import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import SingleProductPage from './pages/SigleProductPage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import Categories from './pages/Categories';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element= {<Categories />} />
          <Route path='/products' element= {<ProductsPage />} />
          <Route path='/product/:product_id' element= {<SingleProductPage />} />
          <Route path='*' element= {<NotFoundPage />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
