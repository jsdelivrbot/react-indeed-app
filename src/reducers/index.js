import { combineReducers } from 'redux';
import jobsListReducer from './fetch_jobs';
import selectJobReducer from './select_job';
import getJob from './get_job';
import getCountry from './get_country';
import getCity from './get_city';
import setStage from './set_stage';
import fetchIndeed from './fetch_indeed';
import fetchIndeedTotalResults from './fetch_indeed_total';

const rootReducer = combineReducers({
  jobs_list: jobsListReducer,
  selected_job: selectJobReducer,
  get_job: getJob,
  get_country: getCountry,
  get_city: getCity,
  set_stage: setStage,
  fetch_indeed: fetchIndeed,
  fetch_indeed_total: fetchIndeedTotalResults
});


export default rootReducer
