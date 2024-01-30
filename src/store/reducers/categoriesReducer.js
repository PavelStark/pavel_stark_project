const defaultState = {
    category_title: '',
    allCategories: []
}
  
const ALL_CATEGORIES = 'ALL_CATEGORIES'
const NOTALL_CATEGORIES = 'NOTALL_CATEGORIES'


export const categoriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_CATEGORIES:
            return { allCategories: action.payload }
        case NOTALL_CATEGORIES:
            let notAllCategories = action.payload.slice(0,4)
            return { allCategories: notAllCategories }
        default:
            return state
    }
  }
  

  export const allCategoriesAction = (payload) => ({ type: ALL_CATEGORIES, payload })
  export const notAllCategoriesAction = (payload) => ({ type: NOTALL_CATEGORIES, payload })