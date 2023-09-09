/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';

import WelcomeScreen from './src/screens/welcomeScreen/WelcomeScreen';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import Navigation from './src/navigation/Navigation';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
