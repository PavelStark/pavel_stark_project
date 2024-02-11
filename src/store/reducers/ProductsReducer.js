const defaultState = {
  category_title: "",
  products: [],
};

const CLEAR_DATA = "CLEAR_DATA";
const ALL_PRODUCTS = "ALL_PRODUCTS";
const ALL_SALE_PRODUCTS = "ALL_SALE_PRODUCTS";
const TOP_SALES_PRODUCTS = "TOP_SALES_PRODUCTS";
const CATEGORY_PRODUCTS = "CATEGORY_PRODUCTS";
const FILTER_BY_SALE = "FILTER_BY_SALE";
const SORT = "SORT";

function addIsShowProp(array) {
  return array.map((elem) => ({ ...elem, isShow: true }));
}
function addPercentProp(array) {
  return array.map((elem) => ({
    ...elem, percent: Math.round(100 - (elem.discont_price * 100) / elem.price) }));
}

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return defaultState;

    case ALL_PRODUCTS:
      return { products: addPercentProp(addIsShowProp(action.payload)) };

    case ALL_SALE_PRODUCTS:
      let sales_products = action.payload.filter((elem) => elem.discont_price);
      return { products: addPercentProp(addIsShowProp(sales_products)) };

    case TOP_SALES_PRODUCTS:
      let topSales = addPercentProp(addIsShowProp(action.payload))
        .slice()
        .filter((elem) => elem.discont_price)
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 4);
      return { products: topSales };
    
    case CATEGORY_PRODUCTS: 
    return { category_title: action.payload.category.title, products: addPercentProp((addIsShowProp(action.payload.data)))}

//------------------------------------------------------------------------
    case SORT:
      if (action.payload === "price_low_hight") {
        let sorted = state.products.slice().sort((a, b) => {
          if (a.discont_price && b.discont_price) {
            return a.discont_price - b.discont_price;
          } else if (b.discont_price) {
            return a.price - b.discont_price;
          } else if (a.discont_price) {
            return a.discont_price - b.price;
          } else {
            return a.price - b.price;
          }
        });
        return { products: sorted };
//------------------------------------------------------------------------
      } else if (action.payload === "price_hight_low") {
        let sorted = state.products.slice().sort((a, b) => {
          if (a.discont_price && b.discont_price) {
            return b.discont_price - a.discont_price;
          } else if (a.discont_price) {
            return b.price - a.discont_price;
          } else if (b.discont_price) {
            return b.discont_price - a.price;
          } else {
            return b.price - a.price;
          }
        });
        return { products: sorted };
//------------------------------------------------------------------------
      } else if (action.payload === "sale_low_hight") {
        let sorted = state.products
          .slice()
          .sort((a, b) => a.percent - b.percent);

        return { products: sorted };
//------------------------------------------------------------------------
      } else if (action.payload === "sale_hight_low") {
        let sorted = state.products
          .slice()
          .sort((a, b) => b.percent - a.percent);

        return { products: sorted };
//------------------------------------------------------------------------
      } else if (action.payload === "title_A_Z") {
        let sorted = state.products.slice()
          .sort((a, b) => { if (a.title < b.title) return -1 }) 

        return { products: sorted };
//------------------------------------------------------------------------
      } else if (action.payload === "title_Z_A") {
        let sorted = state.products.slice()
          .sort((a, b) => { if (a.title > b.title) return -1 })

        return { products: sorted };
//------------------------------------------------------------------------
      } else if (action.payload === "newest") {
        let sorted = state.products.slice()
          .sort((a, b) => { if (a.updatedAt > b.updatedAt) return -1 })

        return { products: sorted };
//------------------------------------------------------------------------
      } else if (action.payload === "default") {
        let sorted = state.products.slice()
          .sort((a, b) => a.id - b.id )

        return { products: sorted };
//-----------------------------------------------------------------------
      } else {
        return state;
      }
//------------------------------------------------------------------------
    case FILTER_BY_SALE:
      if (action.payload) {
        return {
          ...state,
          products: state.products.map((elem) => {
            if (!elem.discont_price) {
              elem.isShow = false;
            }
            return elem;
          }),
        };
      } else {
        return {
          ...state,
          products: addIsShowProp(state.products),
        };
      }
    default:
      return state;
  }
};

export const clearDataAction = () => ({ type: CLEAR_DATA });
export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const allSalesProductsAction = (payload) => ({ type: ALL_SALE_PRODUCTS, payload });
export const topSalesProductsAction = (payload) => ({ type: TOP_SALES_PRODUCTS, payload });
export const categoryProductsAction = (payload) => ({ type: CATEGORY_PRODUCTS, payload });
export const filterBySaleAction = (payload) => ({ type: FILTER_BY_SALE, payload });
export const sortAction = (payload) => ({ type: SORT, payload });

