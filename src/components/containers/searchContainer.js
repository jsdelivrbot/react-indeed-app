
import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ResultsBody from '../resultsBody'
import HeaderMin from '../headerMin'

class SearchContainer extends Component{

  renderText(item){
    this.props.selectJob(item);
    this.props.setStage('show')
  }

  renderItem(item){
    return( <ResultsBody key={item.job_title} job={item.job_title} city={item.city} itemA={item} onClickAction={(item) => this.renderText(item)}/>)
  }

  render(){
    return( <div>
       <HeaderMin />
       {this.props.jobList.map(this.renderItem , this)}
     </div>
   )
  }
}


const mapStateToProps = state => {
  return {
    job: state.get_job,
    city: state.get_city,
    country: state.get_country,
    jobList: state.jobs_list,
    selectJob: state.selected_job
    }
  }







export default connect(mapStateToProps , actions)(SearchContainer)
