import { View, Text , TextInput, StyleSheet, useWindowDimensions} from 'react-native'
import React from 'react'

interface CustomInputProps {
    value: string;
    setValue: (text: string) => void;
    placeholder: string;
}

const CustomInput = ({value, setValue, placeholder}: CustomInputProps) => {
  const {height} = useWindowDimensions();
  return (
    <View style = {styles.container}>
      <TextInput 
        height = {height * 0.05}
        value = {value}
        onChangeText = {setValue}
        placeholder= {placeholder}
        style = {styles.input}
        secureTextEntry = {placeholder === 'Password'}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        
    },
    input: {},
})

export default CustomInput