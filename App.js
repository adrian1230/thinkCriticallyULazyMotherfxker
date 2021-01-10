/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Navigation from './src/router/index';
import Splash from './src/screens/splash/index';
import Signin from './src/screens/signin';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Splash /> */}
      <Navigation />
    </>
  );
};

export default App;
