import { View, Text, useWindowDimensions , StyleSheet, Image} from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>; 




const LoginScreen = (): JSX.Element => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const navigation = useNavigation<SignUpScreenProp>();
    const onLogin= () => {
        console.warn('Log in');
        navigation.navigate('Login');
        
    }
    
    const onSignUp = () => {
        console.warn('Sign up');
        navigation.navigate('SignUp');
    }

    const {height} = useWindowDimensions();
    return (
        <View style = {styles.root}>
            <Image source={Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
            
            <Text style = {{fontSize: 15}}> Login to your account</Text>
            

            <CustomInput placeholder = "Username" value = {username} setValue={setUsername} />
            <CustomInput placeholder = "Password" value = {password} setValue={setPassword} />
            <CustomButton text = "Sign in" onPress = {onLogin} bgColor='blue'/>


            <View style = {{flexDirection: 'row', marginTop: 100, alignItems: 'center'}}>
                <Text>Don't have an account?</Text>
                <CustomButton text = "Sign up" onPress = {onSignUp} type = 'TERTIARY'/>
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
    }
});

export default LoginScreen