import React , { Component } from 'react';
import style from '../../style/main.scss';
import Header from './header.js'
import SearchBar from './searchBar.js'

class App extends Component{

  render(){
    return(
     <div>
      <Header />
      <SearchBar />
    </div>
    )
  }

}



export default App
