import{GET_ACTIVITIES} from "../actions/type"


const initialState = {
    items: [],
    item:{}
  }
  export default function(state = initialState, action) {
    switch(action.type){
        case GET_ACTIVITIES:
            return {
                ...state,
                items: action.payload
            };
        default: return state
    }
}