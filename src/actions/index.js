import axios from 'axios';
import {
  FETCH_JOBS
 } from './types';

export function fetchJobs(job , city , country ){
  const request = axios.get('http://147.135.210.252:3000/find&job=Java%20Developer&city=Wroclaw&country=PL');
  return {
    type: FETCH_JOBS,
    payload: request
  }
}
