import{GET_CITIES, ONE_CITY} from "../actions/type"


const initialState = {
    items: [],
    item:{}
  }
  export default function(state = initialState, action) {
    switch(action.type){
        case GET_CITIES:
            return {
                ...state,
                items: action.payload
            };
            case ONE_CITY:
            return {
                ...state,
                item: action.payload
            };
        default: return state
    }
}