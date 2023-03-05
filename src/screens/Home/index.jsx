import {Text, View, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import Fontiso from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';



const  HomeScreen = (props)=> {
  const navigation = useNavigation();
  return (
    <View>
       <Pressable onPress={()=> navigation.navigate('Destination Search')} style={styles.Searchbutton} >
       <Fontiso name={'search'} size={16} color={'#f15454'}/>
         <Text style={styles.SearchbuttonText}>  Where are you going ?</Text>
        </Pressable>
      <ImageBackground source={require('../../../assets/images/homewall.jpg')} style={styles.image}>
        {/* title */}

        <Text style={styles.title}>Go Near</Text>

        <Pressable style={styles.button} >
          <Text style={styles.buttonText}>Explore Nearby Stays</Text>
        </Pressable>

      </ImageBackground>
    </View>
  )
}



export default HomeScreen;