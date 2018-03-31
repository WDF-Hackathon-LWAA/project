import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EmployerLanding extends Component {

  state = {
    employer: {
      name: 'Janet',
      companies: []
    },
    roleId: 1
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then(res => res.data)
      .then(companies => {
        this.setState({ companies });
      });
  }

  render() {

    let { roleId, companies } = this.state;
    let { name } = this.state.employer;
    console.log(companies)

    if (companies) {

      return (

        <div className="employer-landing">
          <h2>Welcome back, {name}</h2>
          <br />
          <h4>Your posted roles:</h4>
          {
            companies.map(company => {
              return (
                <li key={company.id}>{company.name}
                  <Link to={`/role/${roleId}`}>
                    <input type="submit" value="View a role" />
                  </Link>
                </li>
              );
            })
          }
        </div>
      );
    } else {
      return (
        <h4>Please wait</h4>
      );
    }
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(EmployerLanding);

// export default EmployerLanding;