import React from 'react';

const Header = (props) => {
    return(
      <div className="header-top">
          <h1> {props.text} </h1>
          <p>  {props.description} </p>
      </div>
    )
}

export default Header
