import {LOGIN_REQUEST_SUCCESS, FETCH_POST, DELETE_POST} from "../actions/index";
import cookie from "react-cookie";



export default function user(state = {}, action) {
    switch (action.type) {
      case LOGIN_REQUEST_SUCCESS:
        cookie.save('sessionId', action.user.sid, { path: '/' })
        return {...state, [action.payload.data.id]: action.payload.data};
        
    case REGISTER_REQUEST_SUCESS:

    return state;
    
      default:
        return state
    }
}