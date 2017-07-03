
import React , { Component } from 'react';
import { connect } from 'react-redux';
import {getCity , getJob , getCountry , fetchJobs ,selectJob , setStage} from '../../actions';
import ResultsBody from '../resultsBody'
import HeaderMin from '../headerMin'
import FooterComponent from '../FooterComponent';

class SearchContainer extends Component{
  renderText(item){
    this.props.selectJob(item);
    this.props.setStage('show')
  }

  fetch(){
    this.props.fetchJobs(this.props.job, this.props.city, this.props.country)
  }


  renderItem(item){
    return( <ResultsBody
      skills={item.skills}
      key={item.job_title}
      job={item.job_title}
      city={item.city}
      itemA={item}
      onClickAction={(item) => this.renderText(item)}/>)
  }


  render(){
    return( <div>
       <HeaderMin
         onChangeGetCity={event => this.props.getCity(event)}
         onChangeGetJob={event => this.props.getJob(event)}
         onChangeGetCountry={event => this.props.getCountry(event)}
         City={this.props.city}
         Country={this.props.country}
         Job={this.props.job}
         onSubmitChangeFetch={() => this.fetch()}

       />
       {this.props.jobList.map(this.renderItem , this)}
       <FooterComponent />

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


const mapDispatchToProps = dispatch => {
  return {
    getCity: (city) => dispatch(getCity(city)),
    getCountry: (country) => dispatch(getCountry(country)),
    getJob: (job) => dispatch(getJob(job)),
    fetchJobs: (job,city,country) => dispatch(fetchJobs(job,city,country)),
    selectJob: (job) => dispatch(selectJob(job)),
    setStage: (stage) => dispatch(setStage(stage))
  }
}




export default connect(mapStateToProps , mapDispatchToProps)(SearchContainer)
