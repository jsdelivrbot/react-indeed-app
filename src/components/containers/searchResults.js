import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ResultsBody from '../resultsBody'

class SearchResults extends Component {

  componentDidMount(){
    this.props.fetchJobs()

  }
  renderList(item){
    console.log(item)
    return <ResultsBody job={item.job_title} skills={item.skills} description={item.job_description} key={item._id} />
  }
  render(){
    return (
      <div>
    
    </div>
    )
  }
}




function mapStateToProps(state) {
  return { jobs_list: state.jobs_list};
}

export default connect(mapStateToProps, actions)(SearchResults)
