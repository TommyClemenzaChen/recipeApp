import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  onPress: () => void; // Define the type for onPress
  text: string; // Assuming text is a string
  type?: string; // Assuming type is a string
  bgColor?: string; // Assuming bgColor is a string
  fgColor?: string; // Assuming fgColor is a string

}

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor , fgColor}: CustomButtonProps) => {
  if(type === 'TERTIARY') {
    return (
      <Pressable 
        onPress={onPress} 
        style={[
          styles.container, 
          styles.container_TERTIARY,
          bgColor ? {backgroundColor: bgColor} : {},
        ]}>

        <Text 
          style = {[
            styles.text, 
            styles.text_TERTIARY,
            fgColor ? {color: fgColor} : {},
          ]}>

          {text}
        </Text>
      </Pressable>
    )
  }
  return (
    <Pressable 
      onPress={onPress} 
      style={[
        styles.container, 
        styles.container_PRIMARY,
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>

      <Text 
        style = {[
          styles.text, 
          styles.text_PRIMARY,
          fgColor ? {color: fgColor} : {},
        ]}>
          
        {text}
      </Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2cb9b0',
        width: '50%',
        
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    container_PRIMARY: {
        backgroundColor: '#2cb9b0',
        width: '50%',
        padding : 15,
    },
    container_TERTIARY: {
        backgroundColor: 'transparent',
        width: '17%'
        
    },
    text: {
        fontWeight: 'bold',
        
    },
    text_PRIMARY: {
      color: 'white',
      
    },
    text_TERTIARY: {
        color: 'blue',
    }
})

export default CustomButton