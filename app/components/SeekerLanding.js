import React, { Component } from 'react';


class SeekerLanding extends Component{

  constructor(){
    super()
    this.state = {
      appliedJobs : [{role:'frontend', tech:'angular',status:'pending'},{role:'frontend', tech:'vue', status:'accepted'},{role:'backend', tech:'java',status: 'rejected'}],
      user: {name: 'Dat Boi'}
    }
  }
  


  render(){

    return(
      <div class="seeker-landing">
      <h1>Hey, {this.state.user.name}</h1>
        <div id="applied-jobs">
        <ul>
        {this.state.appliedJobs && this.state.appliedJobs.map( job => {
          return <li><div class='applied-job'><h2>{job.role}</h2><h3>{job.tech}</h3><h4>{job.status}</h4></div></li>
        })}
        </ul>
        </div>
      </div>
    )
  }

}
//Potential code
<button ></button>
export default SeekerLanding;