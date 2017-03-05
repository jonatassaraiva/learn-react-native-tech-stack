import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import Item from './item';

class LibraryList extends Component {
  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.dataSource = dataSource.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <Item library={library} />;
  }

  render() {
    return (
      <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
    );
  }
}

LibraryList.propTypes = {
  libraries: React.PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);