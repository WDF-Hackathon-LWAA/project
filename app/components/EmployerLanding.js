import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmployerLanding extends Component {

  state = {
    employer: {
      name: 'Janet'
    },
    roleId: 1
  }

  render() {

    let { roleId } = this.state;
    let { name } = this.state.employer;

    return (
      <div className="employer-landing">
        <h2>Welcome back, {name}</h2>
        <br />
        <h4>Your posted roles:</h4>
        <Link to={`/result/${roleId}`}><input type="submit" value="View a role" /></Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// });

// export default connect(mapStateToProps)(Landing);

export default EmployerLanding;
