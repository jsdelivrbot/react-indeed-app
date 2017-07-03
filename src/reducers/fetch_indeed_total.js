import { FETCH_INDEED_TOTAL } from '../actions/types';


export default (state="" , action) => {
  switch(action.type){
    case FETCH_INDEED_TOTAL:
      return action.payload.data.totalResults
  }
  return state
}
