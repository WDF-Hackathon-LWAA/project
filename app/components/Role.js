import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Role extends Component {



  render() {

    return (
      <div>
        <h3>YO, this is your posted role!</h3>
        <Link to="/"><input type="submit" value="Go Back" /></Link>
      </div>

    )
  }
}

export default Role;
