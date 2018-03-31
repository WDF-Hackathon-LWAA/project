import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostRole extends Component {

state = {

}

render() {

  return (
    <div>
      <h3>Post a new role</h3>
      <br />
      <Link to="/employerLogin"><input type="submit" value="Go Back" /></Link>
    </div>

  );
}
}

export default Role;
