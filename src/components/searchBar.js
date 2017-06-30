import React from 'react';

const SearchBar = (props) => {


    return(
      <div>
        <h2 className="searchBar-heading">Search for programming job offers </h2>
        <form className="searchBar" onSubmit={ event => event.preventDefault()}>
          <div className="search-container">
            <input onChange={ event => props.onChangeGetJob(event.target.value)} value={props.Job} placeholder="React Developer"   />
            <input onChange={ event => props.onChangeGetCity(event.target.value)} value={props.City} placeholder="Wroclaw"   />
            <input onChange={ event => props.onChangeGetCountry(event.target.value)} value={props.Country} placeholder="PL"  />
            <button onClick={() => props.onSubmitChangeFetch()}></button>
        </div>
        </form>
    </div>
    )

  }



export default SearchBar
