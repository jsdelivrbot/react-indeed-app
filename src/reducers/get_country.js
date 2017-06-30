import { GET_COUNTRY } from '../actions/types';


export default (state = "" , action) => {
    switch(action.type){
      case GET_COUNTRY:
      return action.payload
    }
    return state
}
