import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  onPress: () => void; // Define the type for onPress
  text: string; // Assuming text is a string
}

const CustomButton = ({onPress, text}: CustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style = {styles.container}>
      <Text style = {styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2cb9b0',
        width: '50%',
        padding : 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold',
        color: 'white', 
    }
})

export default CustomButton