import { SET_STAGE } from '../actions/types';


export default (state = "main" , action) => {
  switch(action.type){
    case SET_STAGE:
      return action.payload
  }
  return state
}
