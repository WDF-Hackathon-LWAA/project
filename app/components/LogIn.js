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
    let userinfo = {
      'email': email,
      'password': password
    }
    axios.post('/auth/login/company', userinfo)
      .then(user => {
        if (user) {
          history.push('/employerLanding');
        }
      })
  }
  render(){
    return (
      <div className="login-page">
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
