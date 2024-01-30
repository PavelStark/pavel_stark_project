import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllProducts } from "../../asyncActions/products";
import { ROOT_URL } from "../../index";
import style from './ProductsContainer.module.css'

export default function ProductsContainer( {type} ) {

  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAllProducts(type));
  }, [id, type]);
  
  let price = 0 
  let truePrice = 0
  
  function priceHandle(elem) {
  
    if (elem.discont_price) {
      truePrice = '$' + elem.discont_price
      price = '$' + elem.price
    }
    else if (!elem.discont_price) {
      truePrice = '$' + elem.price
      price = ""
    }
    return truePrice
  }


    function saleHandle(elem) {
      let sale = 0 

      if (elem.discont_price){
        sale = '-' + Math.round(100 - (elem.discont_price * 100 / elem.price)) + '%'
        
      }
      else
        sale = ''
     
      return sale
    }
  
//--------------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <div>
      <h2>All Products</h2>

      <div className={style.productsContainer}>

        {products.map((elem) => (
          <div>
            
            <div className={style.imageContainer}> 
            <img alt='Products' src={ROOT_URL + elem.image} />

              <div className={style.salePercent} style={{ display:(elem.discont_price) ? 'block' : 'none' }}>
                <p>{saleHandle(elem)}</p>
              </div>

            
            <p className={style.itemTitle}>{elem.title}</p>

            <div className={style.priceContainer} >
              <p>{priceHandle(elem)}</p> 
            
              <p className={style.sale}> {price} </p>
 
          </div>

            </div>
          </div>
        ))}

       </div>
      </div>
    </div>
  );
}

/*   const products_state = useSelector(state => state.products);

  return (
    <div>
      {
        products_state.map(el => <ProductItem key={el.id} {...el} />)
      }
    </div>
  )
} */