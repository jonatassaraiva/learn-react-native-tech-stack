import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { Section } from '../common';

class Item extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderTitle() {
    const { title } = this.props.library;

    return (
      <Section>
        <Text style={styles.title}>
          {title}
        </Text>
      </Section>
    );
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Section>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </Section>
      );
    }
  }

  render() {
    const { id } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.onPressItem(id)}>
        <View>
          {this.renderTitle()}
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Item.propTypes = {
  library: React.PropTypes.object.isRequired,
  expanded: React.PropTypes.bool,
  onPressItem: React.PropTypes.func
};

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default Item;
