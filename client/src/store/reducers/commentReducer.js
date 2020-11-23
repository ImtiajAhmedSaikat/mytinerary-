import{GET_COMMENTS,ADD_COMMENTS,UPDATE_COMMENTS,DELETE_COMMENTS} from "../actions/type"


const initialState = {
    items: [],
    item:{}
  }
  export default function(state = initialState, action) {
    switch(action.type){
        case GET_COMMENTS:
            return {
                ...state,
                items: action.payload
            };
            case ADD_COMMENTS:
            return {
                ...state,
                item: action.payload
            };
            case UPDATE_COMMENTS:
            return {
                ...state,
                item: action.payload
            };
            case DELETE_COMMENTS:
            return {
                ...state,
                item: action.payload
            };
            
        default: return state
    }
}