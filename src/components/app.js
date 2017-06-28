import React , { Component } from 'react';
import style from '../../style/main.scss';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './header'
import SearchBar from './searchBar'

import HeaderSearch from './containers/headerSearch';


class App extends Component{
  constructor(props){
    super(props);
    this.state = { job: "" , city: "" , country: "" , clicked: false}
  }


      onInputChangeJob(event){
        this.setState({job: event})
      }

      onInputChangeCity(event){
        this.setState({city: event})
      }

      onInputChangeCountry(event){
        this.setState({country: event})
      }
      onSubmitChange(event){
        this.setState({clicked: true })
      }

    onStateChange(){
      if(this.state.clicked ){
        return (
          <div>
            <HeaderSearch City={this.state.city} onClickChangeState={() => this.onSubmitChange()} Country={this.state.country} Job={this.state.job} onChangeJob={ event => this.onInputChangeJob(event) }  onChangeCity={event => this.onInputChangeCity(event)} onChangeCountry={event => this.onInputChangeCountry(event)}/>
        </div>
        )
      }else{
        return (
          <div>
            <Header />
            <SearchBar City={this.state.city} onClickChangeState={() => this.onSubmitChange()} Country={this.state.country} Job={this.state.job} onChangeJob={ event => this.onInputChangeJob(event) }  onChangeCity={event => this.onInputChangeCity(event)} onChangeCountry={event => this.onInputChangeCountry(event)}/>
        </div>
        )
      }
    }

  render(){
    return(
      <div>
          {this.onStateChange()}
      </div>
    )
  }

}



export default connect(null, actions)(App);
