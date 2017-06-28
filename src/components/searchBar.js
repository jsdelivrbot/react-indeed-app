import React from 'react';

const SearchBar = (props) => {
    return(
      <div>
        <h2 className="searchBar-heading">Search for programming job offers </h2>
        <form className="searchBar" onSubmit={ event => event.preventDefault()}>
          <div className="search-container">
            <input value={props.Job} placeholder="React Developer" onChange={ event => props.onChangeJob(event.target.value)} />
            <input value={props.City} placeholder="Wroclaw"  onChange={ event => props.onChangeCity(event.target.value)}/>
            <input value={props.Country} placeholder="PL" onChange={ event => props.onChangeCountry(event.target.value)} />
            <button onClick={() => props.onClickChangeState()}></button>
        </div>
        </form>
    </div>
    )

  }



export default SearchBar
