import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import store, {} from '../store';

class SignUp extends Component {
  constructor(){
    super()
  this.state ={
    email : '',
    password: '',
    selectedOption :'seeker',
    buttonClicked: false
  }
  this.handleOptionChange = this.handleOptionChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
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
     <div class="signup">
     <form>
       <input type="text" name="email" placeholder="EMAIL"/>
       <br></br>
       <input type="text" name="email" placeholder="password"/>
       <br></br>
      <label>
       <input type="radio" name="seeker" onChange={this.handleOptionChange} checked={this.state.selectedOption === "seeker"}/>
      Seeker
       </label>
       <label>
       <input type="radio" name="company" onChange={this.handleOptionChange} checked={this.state.selectedOption === "company" }/>
       Company
        </label>
     </form>
     <button onClick={this.handleClick}>NEXT</button>
     {this.state.buttonClicked ? <h4>hello</h4> : null }
     </div>
   )
  }
}
export default SignUp;