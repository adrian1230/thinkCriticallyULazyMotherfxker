/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
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
  scrollView: {},
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: '#edf2ef',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 28,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

export default App;
