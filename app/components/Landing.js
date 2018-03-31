import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import store, { fetchPhotos, updateSearchTerm } from '../store';
import SignUp from './SignUp';
import SeekerLanding from './SeekerLanding';
import SeekerSignUp from './SeekerSignUp';
class Landing extends Component {
  // ES6 way to bind the methods

  render() {

   return (
     <SeekerSignUp/>
   )
  }
}

// const mapStateToProps = (state) => ({

// });

// export default connect(mapStateToProps)(Landing);

export default Landing;
