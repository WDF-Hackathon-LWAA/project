import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmployerLanding extends Component {

  state = {
    roleId: 1
  }

  render() {

    let { roleId } = this.state;

    return (
      <div>
        <h2>Welcome back, Employer</h2>
        <Link to={`/result/${roleId}`}><input type="submit" value="View a role" /></Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// });

// export default connect(mapStateToProps)(Landing);

export default EmployerLanding;
