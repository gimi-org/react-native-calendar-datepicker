/**
* <%= pascalEntityName %> pure component.
* @flow
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// Component specific libraries.
import _ from 'lodash';

type Props = {
  children?: any,
  style?: PropTypes.style,
};
type State = {};

export default class <%= pascalEntityName %> extends Component {
  props: Props;
  state: State;
  static defaultProps: Props;

  render() {
    return (
      <View style={[{
        // Wrapper view default style.
      },this.props.style]}>
      </View>
    );
  }
}
<%= pascalEntityName %>.defaultProps = {};

const styles = StyleSheet.create({
});
