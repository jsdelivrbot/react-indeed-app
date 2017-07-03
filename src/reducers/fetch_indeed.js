import { FETCH_INDEED } from '../actions/types';

export default (state = [] , action) => {
  switch(action.type){
    case FETCH_INDEED:
      return[...state , ...action.payload.data.results ];
  }
  return state
}
