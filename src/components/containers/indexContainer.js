import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import MainContainer from './mainContainer';
import SearchContainer from './searchContainer';
import ShowContainer from './showContainer';

class IndexContainer extends Component{
  renderView(){
    let stage = this.props.stage;
    switch(stage){
      case "main":
        return ( <MainContainer /> )
      case "search":
        return ( <SearchContainer /> )
      case "show":
        return ( <ShowContainer /> )
    }
  }



  render(){
    return(
      <div>
        {this.renderView()}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    job: state.get_job,
    city: state.get_city,
    country: state.get_country,
    jobList: state.jobs_list,
    stage: state.set_stage
  }
}


export default connect(mapStateToProps , actions)(IndexContainer)
