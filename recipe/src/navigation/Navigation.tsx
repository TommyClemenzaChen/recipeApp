import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import SelectionScreen from '../screens/SelectionScreen/SelectionScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Selection: undefined;
  Home: undefined;
  
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Selection" component={SelectionScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation