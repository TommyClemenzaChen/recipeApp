import { View, Text, StyleSheet, useWindowDimensions, Image, Button } from 'react-native'
import React, {useState} from 'react'
import navBar2 from '../../../assets/images/navBar2.png'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import ToggleButton from '../../components/ToggleButton/ToggleButton';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;


const SelectionScreen = () => {
  const {height} = useWindowDimensions();
    const navigation = useNavigation<SignUpScreenProp>();
    const [searchInterest, setSearchInterest] = useState<string>('');
    

    const finishSelection = () => {
        console.warn('finish selection');
        navigation.navigate('Welcome');
    }

  const addInterest = (text: string) => {
        console.warn(text)
        
    }

  return (
    <View style = {styles.root}>
      <Image source={navBar2} style = {[styles.logo, {height: height * 0.1}]} resizeMode='contain'/>
            
        <Text style = {{fontSize: 25, fontFamily: 'American Typewriter'}}> CHEF</Text>
        
        <Text style = {styles.text}> Select your interests</Text>
        <Text style = {styles.subtext}> Get a more curated experience</Text>

        <CustomInput placeholder = "Search" value = {searchInterest} setValue={setSearchInterest} />

        <View style={styles.buttons}>
            <ToggleButton text="Asian food" onPress={addInterest} widthSize= '40%'/>
            <ToggleButton text="chown mein" onPress={addInterest} widthSize= '55%'/>
            <ToggleButton text="8" onPress={addInterest} widthSize= '35%'/>
            <ToggleButton text="methanytmine" onPress={addInterest} widthSize= '63%'/>
            <ToggleButton text="lean" onPress={addInterest} widthSize= '64%'/>
            <ToggleButton text="vegan" onPress={addInterest} widthSize= '32%'/>
            <ToggleButton text="temp" onPress={addInterest} widthSize= '32%'/>
            <ToggleButton text="something" onPress={addInterest} widthSize= '64%'/>
        </View>

        <CustomButton text="Submit" onPress={finishSelection} bgColor='black' fgColor='white'/>
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
    subtext:{
        fontSize: 15, 
        alignSelf: 'flex-start', 
        fontWeight: '100', 
        color: 'gray', 
        marginLeft: 20, 
        marginBottom: 10
    },
    text:{
        fontSize: 15, 
        alignSelf: 'flex-start', 
        marginTop: 40, 
        marginLeft: 20,
        
    },
    buttons: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'wrap',
        paddingHorizontal: 20,

    }

});

export default SelectionScreen