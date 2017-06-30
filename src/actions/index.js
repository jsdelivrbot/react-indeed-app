import axios from 'axios';
import { FETCH_JOBS , SELECT_JOB , GET_JOB , GET_COUNTRY , GET_CITY , SET_STAGE} from './types';


export function getCity(city){
  return{
    type: GET_CITY,
    payload: city
  }
}

export function setStage(stage){
  return{
    type: SET_STAGE,
    payload: stage
  }
}

export function getJob(job){
  return{
    type: GET_JOB,
    payload: job
  }
}
export function getCountry(country){
  return{
    type: GET_COUNTRY,
    payload: country
  }
}

export function fetchJobs(job,city,country){
  console.log(job,city,country)
  const request = axios.get(`http://147.135.210.252:3000/find&job=${job}&city=${city}&country=${country}`);
  return {
    type: FETCH_JOBS,
    payload: request
  }
}

export function selectJob(job){
  return{
    type: SELECT_JOB,
    payload: job
  }
}
