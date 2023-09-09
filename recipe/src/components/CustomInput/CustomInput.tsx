import { View, Text , TextInput, StyleSheet, useWindowDimensions} from 'react-native'
import React from 'react'

interface CustomInputProps {
    value: string;
    setValue: (text: string) => void;
    placeholder: string;
    isPassword?: boolean;
 
}

const CustomInput = ({value, setValue, placeholder, isPassword = false}: CustomInputProps) => {
  const {height} = useWindowDimensions();
  return (
    <View style = {styles.container}>
      <TextInput 
        
        value = {value}
        onChangeText = {setValue}
        placeholder= {placeholder}
        style = {[styles.input, {height: height * 0.06}]}
        secureTextEntry = {isPassword}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        
    },
    input: {
        fontSize: 18,
        //make text color black
        color: 'black',
        
    },
})

export default CustomInput