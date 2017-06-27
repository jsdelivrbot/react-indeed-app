import React , { Component } from 'react';

class SearchBar extends Component{
  render(){
    return(
      <form className="searchBar">
        <div className="search-container">
          <input placeholder="React Developer" />
          <input placeholder="Wroclaw" />
          <input placeholder="PL"/>
          <button></button>
      </div>
      </form>
    )
  }
}

export default SearchBar
