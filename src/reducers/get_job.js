import {  GET_JOB } from '../actions/types';

export default (state = "" , action ) => {
  switch(action.type){
    case GET_JOB:
    return action.payload
  }
  return state
}
