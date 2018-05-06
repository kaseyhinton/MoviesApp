import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="SIGN IN"
          onPress={() => this.props.navigation.navigate('SignIn')}
          style={{ backgroundColor: 'darkgrey' }}
        />
        <Button
          title="SIGN UP"
          onPress={() => this.props.navigation.navigate('SignUp')}
          style={{ backgroundColor: 'darkgrey' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};