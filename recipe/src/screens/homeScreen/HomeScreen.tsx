import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenProp>();



  return (
    <View style = {styles.container}>
        <Text>Home Screen</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});


export default HomeScreen