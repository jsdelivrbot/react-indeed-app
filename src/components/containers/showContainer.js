import React , { Component } from 'react';
import Header from '../header'
import * as actions from '../../actions';
import { connect } from 'react-redux';
import GraphComponent from '../graphComponent';
import JobOffersComponent from '../jobOffersComponent'

class ShowContainer extends Component{
  componentDidMount(){
    console.log(this.props.selectedJob)
  }

  render(){
    return(
      <div>
          <Header text={this.props.selectedJob.job_title} description={this.props.selectedJob.job_description} />
          <GraphComponent />
          <JobOffersComponent />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    selectedJob: state.selected_job
  }
}


export default connect(mapStateToProps , actions)(ShowContainer)
