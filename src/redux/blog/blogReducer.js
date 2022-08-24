import {
  SEARCH,
  AUTHORNAMEFILTER,
  IMAGEFILTER,
  CATEGORYFILTER,
  AUTHORIMAGEFILTER,
  ALLFILTER,
} from './actionTypes'
import {data} from '../../assets/data.js'
const initialState = {
  value: data
}
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORYFILTER:
      return {
        ...state,
        value: state.value.filter((val) => val.category === action.payload),
      }
    case AUTHORNAMEFILTER:
      return {
        ...state,
        value: state.value.filter((val) => val.authorName === action.payload),
      }
    case AUTHORIMAGEFILTER:
      return {
        ...state,
        value: state.value.filter((val) => val.authorName === action.payload),
      }
    case ALLFILTER:
      
      return {value: data.filter((val) => val.id !== action.payload)}
    case SEARCH:
     
    return{
      ...state,
      value:state.value.filter((item)=>item.categoryTitle.toLowerCase().includes(action.payload.toLowerCase()))
    }

    default:
      return state
  }
}

export default blogReducer
