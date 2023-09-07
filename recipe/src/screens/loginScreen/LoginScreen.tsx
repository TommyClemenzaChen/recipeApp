import { View, Text, useWindowDimensions , StyleSheet, Image} from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'

const onLogin= () => {
    console.warn('Log in');
}

const loginScreen = (): JSX.Element => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    return (
        <View style = {styles.root}>
        <Image source={Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>

        <CustomInput placeholder = "Username" value = {username} setValue={setUsername} />
        <CustomInput placeholder = "Password" value = {password} setValue={setPassword} />
        <CustomButton text = "login" onPress = {onLogin}/>
        
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

export default loginScreen