import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../header'
import SearchBar from '../searchBar'
import AboutComponent from '../aboutComponent'
import FooterComponent from '../FooterComponent'
import IconsList from '../iconsList'

class MainContainer extends Component{

  showData(){
    this.props.fetchJobs(this.props.job, this.props.city, this.props.country)
    this.props.setStage('search')
  }


  render(){
    return(
      <div>
        <Header text={"Programming Jobs App"}/>
        <SearchBar
          onChangeGetJob={(event) => this.props.getJob(event)}
          onChangeGetCity={(event) => this.props.getCity(event)}
          onChangeGetCountry={(event) => this.props.getCountry(event)}
          onSubmitChangeFetch={() => this.showData()}
         />
          <IconsList />
         <AboutComponent />
         <FooterComponent />
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




export default connect( mapStateToProps , actions)(MainContainer)
