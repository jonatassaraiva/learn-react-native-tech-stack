import React, { Component } from 'react';
import { ListView } from 'react-native';

import Item from './item';

class List extends Component {

  loadDataSource() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.dataSource = dataSource.cloneWithRows(this.props.items);
  }

  renderRow(item) {
    const expanded = item.id === this.props.idItemExpand;
    const { onPressItem } = this.props;
    return <Item library={item} expanded={expanded} onPressItem={onPressItem} />;
  }

  render() {

    this.loadDataSource();

    return (
      <ListView
        enableEmptySections={true}
        pageSize={30}
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

List.propTypes = {
  items: React.PropTypes.array.isRequired,
  idItemExpand: React.PropTypes.any.isRequired,
  onPressItem: React.PropTypes.func
};

export default List;