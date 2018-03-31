import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import store, {} from '../store';

class EmployerSignUp extends Component {
  constructor(){
    super()
  this.state ={}
  // this.handleOptionChange = this.handleOptionChange.bind(this);
  // this.handleClick = this.handleClick.bind(this);
}
  // handleOptionChange(e){
  //   console.log(e.target.name)
  //   this.setState({selectedOption:e.target.name}) 
  // }
  
  // handleClick(){
  //   let bool = this.state.buttonClicked ? false : true
  //   this.setState({buttonClicked: bool })
  // }

  render() {

   return (
     <div class="employer-signup">
     <form>
       <input type="text" name="" placeholder=""/>
       <br></br>
       <input type="text" name="" placeholder=""/>
       <br></br>
     </form>
     </div>
   )
  }
}
export default EmployerSignUp;