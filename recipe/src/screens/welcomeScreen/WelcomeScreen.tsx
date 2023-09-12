import React from 'react';
import type {PropsWithChildren} from 'react';

import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../../components/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';


type homeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>; 

const WelcomeScreen = (): JSX.Element => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation<homeScreenProp>();

    const onLoginNavigate = () => {
        
        console.warn('Navigate to Login');
        navigation.navigate('Login');
    }
    const onSignUpNavigate = () => {
        console.warn('Navigate to Sign Up');
        navigation.navigate('SignUp');
    }

  return (
    <View style = {styles.root}>
      <Image source={Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
      <Text style = {{fontSize: 24, fontWeight: 'bold', marginVertical: 10, marginBottom: 50}}>Riot Games</Text>


      <CustomButton text = "login" onPress = {onLoginNavigate} />
      <CustomButton text = "register" onPress = {onSignUpNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        
        height: 100,
    }
});

export default WelcomeScreen;