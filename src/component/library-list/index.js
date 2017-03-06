import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchLibrares, selectLibrary } from '../../actions/library';

import { Spinner } from '../common';
import List from './list';

class LibraryList extends Component {
  componentWillMount() {
    this.props.fetchLibrares();
  }

  render() {

    if(this.props.isFetching)
      return <Spinner />;

    return (
      <List 
        items={this.props.libraries} 
        idItemExpand={this.props.idLibraryExpand}
        onPressItem={this.props.selectLibrary} />
    );
  }
}

const mapStateToProps = state => {
  const {items, isFetching} = state.libraries.fetch;

  return { 
    libraries: items,
    isFetching,
    idLibraryExpand: state.libraries.select.id
  };
};

const libraryActions = {
  fetchLibrares, selectLibrary
};

export default connect(mapStateToProps, libraryActions)(LibraryList);