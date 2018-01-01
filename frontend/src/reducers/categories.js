import * as types from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  items: [],
  ready: false,
  selectedCategory: null
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_GET_CATEGORIES :
      return {
        ...state,
        isFetching: false,
        items: action.categories,
        ready: true
      }
    case types.REQUEST_GET_CATEGORIES :
      return {
        ...state,
        isFetching: true
      }
    case types.SELECT_CATEGORY :
      return {
        ...state,
        selectedCategory: action.category
      }
    default:
      return state
  }
}

export default categories
