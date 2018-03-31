import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Role extends Component {

  state = {
    candidates: ['bob', 'jane', 'whoever', 'someone'],
    role: {}
  }

  render() {
    console.log()

    let { candidates } = this.state;

    return (
      <div>
        <h3>YO, this is your posted role!</h3>
        <br />
        <div className="candidate-container">
          <h4>Applied candidates</h4>
          {
            candidates.map((candidate, i) =>
              <li className="candidates-list" key={i}>{candidate}</li>
            )
          }
          <br />
          <Link to="/employerLanding"><input type="submit" value="Go Back" /></Link>
        </div>
      </div>

    );
  }
}

export default Role;
