import { GET_CITY } from '../actions/types';


export default (state = "" , action) => {
  switch(action.type){
    case GET_CITY:
      return action.payload
  }
  return state;
}
