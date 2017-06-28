import React from 'react';
import SearchBar from './searchBar'


const HeaderMin = (props , ) => {
    return(
      <div className="header-top-min">
         <SearchBar City={props.City} onClickChangeState={() => props.onClickChangeState()} Country={props.Country} Job={props.Job} onChangeJob={ event => props.onChangeJob(event) }  onChangeCity={event => props. onChangeCity(event)} onChangeCountry={event => props.onChangeCountry(event)}  />
      </div>
    )
}

export default HeaderMin
