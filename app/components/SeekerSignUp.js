import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import store, {} from '../store';

export default class SeekerSignUp extends Component {
  constructor(){
    super()
  this.state ={}
  this.handleOptionChange = this.handleOptionChange.bind(this);
}
  handleOptionChange(e){
    console.log(e.target.name)
    this.setState({selectedOption:e.target.name}) 
  }
  
  handleClick(){
    let bool = this.state.buttonClicked ? false : true
    this.setState({buttonClicked: bool })
  }

  render() {
   return (
     <div class="seeker-signup">
     <form>
     <label htmlFor="level">Level
       <input type="text" name="level" placeholder="i.e Entry"/>
     </label>
     <br></br>
       <label htmlFor="industries">Industries
       <input type="text" name="industries" placeholder="separate with commas"/>
       </label>
     </form>
     </div>
   )
  }
}