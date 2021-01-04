/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';

import Splash from './src/screens/splash/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Splash />
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
