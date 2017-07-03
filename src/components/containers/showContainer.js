import React , { Component } from 'react';
import ShowHeader from '../showHeader'
import {fetchIndeed , fetchIndeedTotalResults , setStage} from '../../actions';
import { connect } from 'react-redux';
import GraphComponent from '../graphComponent';
import JobOffersComponent from '../jobOffersComponent'
import SkillsRequired from '../skillsRequired'
import FooterComponent from '../FooterComponent';
import LoaderSpinner from '../loaderSpinner';

class ShowContainer extends Component{
  componentWillMount(){
    this.props.fetchIndeed(this.props.selectedJob.job_title , this.props.selectedJob.city, this.props.country)
    this.props.fetchIndeedTotal(this.props.selectedJob.job_title , this.props.selectedJob.city, this.props.country)
  }

  loadIndeed(){
    if(this.props.fetch_indeed ){
      return <JobOffersComponent results={this.props.fetch_indeed} total={this.props.fetch_indeed_total} indeedJob={this.props.selectedJob.job_title} indeedCity={this.props.selectedJob.city} indeedCountry={this.props.country} />
    }else{
      return <LoaderSpinner />
    }
  }
  
  render(){
    return(
      <div>
          <ShowHeader
            heading={this.props.selectedJob.job_title}
            description={this.props.selectedJob.job_description}
            onClickGoBack={() => this.props.setStage("search")}/>
          <SkillsRequired skills={this.props.selectedJob.skills} />
          {this.loadIndeed()}
          <FooterComponent />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    selectedJob: state.selected_job,
    country: state.get_country,
    fetch_indeed: state.fetch_indeed,
    fetch_indeed_total: state.fetch_indeed_total

  }
}


const mapDispatchToProps = dispatch => {
  return{
    fetchIndeed: (job,city,country) => dispatch(fetchIndeed(job,city,country)),
    fetchIndeedTotal: (job,city,country) => dispatch(fetchIndeedTotalResults(job,city,country)),
    setStage: (stage) => dispatch(setStage(stage))
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(ShowContainer)
