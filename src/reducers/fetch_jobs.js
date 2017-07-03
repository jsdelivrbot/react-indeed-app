import { FETCH_JOBS } from '../actions/types';

export default function(state = [] , action){
  switch(action.type){
    case FETCH_JOBS:
      return[...state , ...action.payload.data];
  }
  return state;
}
