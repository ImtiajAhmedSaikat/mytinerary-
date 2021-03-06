import{GET_ITINERARIES} from "../actions/type"


const initialState = {
    items: [],
    item:{}
  }
  export default function(state = initialState, action) {
    switch(action.type){
        case GET_ITINERARIES:
            return {
                ...state,
                items: action.payload
            };
        default: return state
    }
}