const defaultState = {
  items: [],
  sumTotal: 0,
  countItems: 0,
};

const ADD_ITEM = "ADD_ITEM";
const CHANGE_COUNT_CART_ITEM = "CHANGE_COUNT_CART_ITEM";

export const cartReducer = (state = defaultState, action) => {
  switch(action.type){
    case ADD_ITEM:
        let findItemIndex = state.items.findIndex(el => el.id === action.payload.id)
        if (findItemIndex !== -1){
            return { ...state, items: state.items.map(el => {
                if (el.id === action.payload.id){
                    el.count += action.payload.count 
                }
                return el
            })}
        } else {
            return {...state, items: [...state.items,  action.payload]}
          }
    case CHANGE_COUNT_CART_ITEM: 
        if (state.count !== 1 || Math.sign(action.payload) !== -1) {
         return { ...state, countItems: state.count + action.payload }
        } else {
          return {...state, countItems: [...state.count,  action.payload]}
        }
          
          
    default:
        return state
}
}

export const addItemAction = (payload) => ({ type: ADD_ITEM, payload });
export const changeCountCartItemAction = (payload) => ({type: CHANGE_COUNT_CART_ITEM, payload });
