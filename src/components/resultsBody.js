import React , { Component } from 'react';

const ResultsBody = (props) => {
  return(
  <div className="media">
  <div className="media-left">
      <img className="media-object" src="..." alt="..." />

  </div>
  <div className="media-body">
    <h4 className="media-heading">{props.job}</h4>
  </div>
</div>
)
}

export default ResultsBody
