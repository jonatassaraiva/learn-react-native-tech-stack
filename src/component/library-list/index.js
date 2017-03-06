import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as libraryActions from '../../actions/library';

import List from './list';

class LibraryList extends Component {
  componentWillMount() {
    this.props.fetchLibrares();
  }

  render() {
    return (
      <List 
        items={this.props.libraries} 
        idItemExpand={this.props.idLibraryExpand}
        onPressItem={this.props.selectLibrary} />
    );
  }
}

const mapStateToProps = state => {
  return { 
    libraries: state.libraries.fetch.items,
    idLibraryExpand: state.libraries.select.id
  };
};

export default connect(mapStateToProps, libraryActions)(LibraryList);