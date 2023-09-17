import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  onPress: (input: string, isPressed: boolean) => void; // Define the type for onPress
  text: string; // Assuming text is a string
  fgColor?: string; // Assuming fgColor is a string
  widthSize?: any;

}

const ToggleButton = ({onPress, text, fgColor, widthSize}: CustomButtonProps) => {
    const [pressed, setPressed] = React.useState(false);

    const togglePressed = () => {
        setPressed(!pressed);
    }

  return (
    <Pressable 
    
      onPress={onPress.bind(null, text, pressed)} 
      onPressIn={togglePressed}
      
      style={[
        styles.container, 
        widthSize ? {width: widthSize} : {},
        pressed ? {backgroundColor: 'gray'} : {backgroundColor: 'white'},
    
      ]}>

      <Text 
        style = {[
          styles.text, 
          
          fgColor ? {color: fgColor} : {},
        ]}>

        {text}
      </Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '50%',
        borderColor: 'black',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        marginVertical: 5,
        
    },
   
    text: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'American Typewriter',
        
        
    },
    
})

export default ToggleButton