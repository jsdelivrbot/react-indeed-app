import React , { Component } from 'react';

const ResultsBody = (props) => {

  return(
<div>
    <div className="media" onClick={() => props.onClickAction(props.itemA)}>
    <div className="media-body">
      <h4 className="media-heading"> {props.job} , {props.city} </h4>
    </div>
  </div>
</div>
)
}


export default ResultsBody
