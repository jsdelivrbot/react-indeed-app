import React from 'react'


const ShowHeader = props => {
  return (
    <div className="show-header">
        <button onClick={ props.onClickGoBack} className="go-back-btn">Go back</button>
        <h1 className="job-title-header">{props.heading}</h1>
        <h3>{props.description}</h3>
    </div>
  )
}


export default ShowHeader
