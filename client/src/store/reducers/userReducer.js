import{LOGIN_USER,LOAD_USER, USER_FAVOURITE,CREATE_USER,LOGOUT} from "../actions/type"


const initialState = {
    item:{},
    user:[],
    favourites:[]
  }
  export default function(state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
           localStorage.setItem("token",action.payload.token)
           console.log(action.payload.token)
            return {
                ...state,
                item: action.payload
            };
            case LOGOUT:
           localStorage.removeItem("token")
        
            return {
                ...state,
                item: action.payload
            };
            case CREATE_USER:
           localStorage.setItem("token",action.payload.token)
           
            return {
                ...state,
                item: action.payload
            };
            case LOAD_USER:
                
                 return {
                     ...state,
                     user: action.payload
                 };
                 case USER_FAVOURITE:
                
                    return {
                        ...state,
                        favourites: action.payload
                    };
                 
        default: return state
    }
}