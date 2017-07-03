import React from 'react';
import SingleJobOfferComponent from './SingleJobOfferComponent'



const JobOffersComponent = (props) => {
  function mapHelper(item){
    return ( <SingleJobOfferComponent result={item} key={item.jobkey}/> )
  }

  return(
    <div>
      <div>
      <h1 className="job-list">{props.totalResults} {props.total} Jobs offers</h1>
        {props.results.map(mapHelper)}
      </div>
        <a className="btn-more-jobs" href={`https://www.indeed.com/jobs?q=${props.indeedJob}&l=${props.indeedCity}&co=${props.indeedCountry}`}><h3>View more offers on indeed.com</h3></a>
  </div>
  )
}



export default JobOffersComponent
