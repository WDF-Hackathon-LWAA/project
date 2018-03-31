import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { fetchPhotos, updateSearchTerm } from '../store';

class Landing extends Component {

  // loadPhotos = () => {
  //   store.dispatch(fetchPhotos(this.props.searchTerm.searchTerm));
  // }

  // ES6 way to bind the methods


  render() {

   return (
     <div>HELLO!!!!!! REACT</div>
   )
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Landing);
