import React , { Component } from 'react';



const ResultsBody = (props) => {
  function a(item){
      return (  <i className={item} key={item} />)
  }

  return(
      <div>
          <div className="media" onClick={() => props.onClickAction(props.itemA)}>
          <div className="media-body">
            <h3 className="media-heading" >  {props.job} , {props.city} </h3>
            <div className="skills-req">
              {props.skills.map(a)}
            </div>

        </div>
      </div>
      </div>
)
}

export default ResultsBody
