import { ROOT_URL } from "../index";
import { productAction } from "../store/reducers/singleProductReducer";
import { categoriesAction, notAllCategoriesAction } from "../store/reducers/categoriesReducer";
import { allProductsAction, allSalesProductsAction, categoryProductsAction, topSalesProductsAction } from "../store/reducers/productsReducer";

//---------------------------------Categories---------------------------------------

export function fetchCategories(type) {
  return function (dispatch) {
    fetch(ROOT_URL + "/categories/all")
      .then((res) => res.json())
      .then((data) => {
        if (type === 'allCategories'){
          dispatch(categoriesAction(data));
        } else if (type ==='notAllCategories'){
          dispatch(notAllCategoriesAction(data))
        }
      })
   }
};

//---------------------------------Products---------------------------------------

export function fetchAllProducts(type) {
  return function (dispatch) {
    fetch(ROOT_URL + "/products/all")
      .then((res) => res.json())
      .then((data) => {
        if (type === 'allProducts') {
          dispatch(allProductsAction(data));
        } else if (type === "allSales") {
          dispatch(allSalesProductsAction(data));
        } else if (type === "topSales") {
          dispatch(topSalesProductsAction(data));
      }
      });
  };
}

//----------------------------------CategoryProducts---------------------------------------

export function fetchCategoryProducts(id){
  return function(dispatch){
      fetch(ROOT_URL+'/categories/'+id)
          .then(res => res.json())
          .then(data => dispatch(categoryProductsAction(data)))
  }
}

//----------------------------------OneProduct---------------------------------------

export function fetchProduct(id){
    return function(dispatch){
        fetch(ROOT_URL+'/products/'+id)
        .then(res => res.json())
        .then(data => dispatch(productAction(data[0])))
    }
}
  

