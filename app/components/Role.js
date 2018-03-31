import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Role extends Component {

  state = {
    candidates: ['bob', 'jane', 'whoever', 'someone']
  }

  render() {

    let { candidates } = this.state;

    return (
      <div>
        <h3>YO, this is your posted role!</h3>
        <br />
        <h4>Applied candidates</h4>
        {
          candidates.map((candidate, i) =>
            <li key={i}>{candidate}</li>
          )
        }
        <br />
        <Link to="/employerLanding"><input type="submit" value="Go Back" /></Link>
      </div>

    );
  }
}

export default Role;
