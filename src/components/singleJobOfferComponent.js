import React from 'react'


const SingleJobOfferComponent = props =>{
  return (
    <div className="media job-offers-list">
        <div className="media-body">
        <h3 className="media-heading" >{props.result.jobtitle} , {props.result.city}</h3>
        {props.result.snippet}
      </div>
      <a href={props.result.url}>View job offer</a>
    </div>
  )
}

export default SingleJobOfferComponent
