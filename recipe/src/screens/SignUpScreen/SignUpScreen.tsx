import { View, Text, useWindowDimensions , StyleSheet, Image} from 'react-native'
import React, { useState } from 'react'

import navBar from '../../../assets/images/navBar.png'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>; 

const TermsOfService = () => {
    console.warn('Terms of Service');
}

const PrivacyPolicy = () => {
    console.warn('Privacy Policy');
}






const SignUpScreen = (): JSX.Element => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[email, setEmail] = useState('');

    const navigation = useNavigation<SignUpScreenProp>();
    const SignUp = () => {
        console.warn('you Signed up');
        navigation.navigate('Selection');
    }

    //move to sign in page
    const NavSignIn = () => {
        console.warn('move to sign in page');
        navigation.navigate('Login');
    }
    const returnToWelcome = () => {
        console.warn('return to welcome page');
        navigation.navigate('Welcome');
    }


    const {height} = useWindowDimensions();
    return (
        <View style = {styles.root}>
            <Image source={navBar} style = {[styles.logo, {height: height * 0.1}]} resizeMode='contain'/>
            
            <Text style = {{fontSize: 25, fontFamily: 'American Typewriter'}}> CHEF</Text>
            

            <CustomInput placeholder = "Enter Username" value = {username} setValue={setUsername} />
            <CustomInput placeholder = "Password" value = {password} setValue={setPassword} isPassword = {true} />
            <CustomInput placeholder = "Confirm Password" value = {confirmPassword} setValue={setConfirmPassword} isPassword = {true} />
            <CustomInput placeholder = "Email" value = {email} setValue={setEmail} />
            <CustomButton text = "Register" onPress = {SignUp} bgColor='black'/>
            <CustomButton text = "back" onPress = {returnToWelcome} bgColor='black'/>

            <Text style = {styles.text}>
                By signing up, you agree to our
                <Text style = {styles.link} onPress={TermsOfService}> Terms of Use </Text> 
                and 
                <Text style = {styles.link} onPress = {PrivacyPolicy}> Privacy Policy</Text>
            </Text>


            <View style = {{flexDirection: 'row', marginTop: 100, alignItems: 'center'}}>
                <Text>Already have an account?</Text>
                <CustomButton text = "Sign in" onPress = {NavSignIn} type = 'TERTIARY'/>
            </View>
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
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {

        //darker yellow color
        color: '#FFD700',
        
    }
});
export default SignUpScreen