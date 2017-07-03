import React from 'react';
import SearchBar from './searchBar'


const HeaderMin = (props) => {
    return(
      <div className="header-top-min">
         <SearchBar City={props.City}
            onClickChangeState={() => props.onClickChangeState()}
            Country={props.Country} Job={props.Job}
            onChangeGetJob={ event => props.onChangeGetJob(event) }
            onChangeGetCity={event => props.onChangeGetCity(event)}
            onChangeGetCountry={event => props.onChangeGetCountry(event)}
            onSubmitChangeFetch={props.onSubmitChangeFetch}  />
      </div>
    )
}

export default HeaderMin
