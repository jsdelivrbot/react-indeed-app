import { combineReducers } from 'redux';
import jobsListReducer from './jobs'

const rootReducer = combineReducers({
  jobs_list: jobsListReducer
});


export default rootReducer
