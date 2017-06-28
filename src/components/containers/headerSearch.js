import React , { Component } from 'react';
import HeaderMin from '../headerMin'

export default class headerSearch extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <HeaderMin City={this.props.City} onClickChangeState={() => this.props.onClickChangeState()} Country={this.props.Country} Job={this.props.Job} onChangeJob={ event => this.props.onChangeJob(event) }  onChangeCity={event => this.props.onChangeCity(event)} onChangeCountry={event => this.props.onChangeCountry(event)} />
    )
  }
}
