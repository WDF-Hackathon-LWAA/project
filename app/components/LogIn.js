import React,{Component} from 'react';

export default class LogIn extends Component{
  constructor(){
    super()


    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    console.log(email, password)
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      </div>
      )
  }
}