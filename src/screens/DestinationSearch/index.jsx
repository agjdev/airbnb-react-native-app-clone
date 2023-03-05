import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';



export default DestinationSearchScreen = () => {
  const navigation = useNavigation();

  const [inputText, setinputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        placeholder="Where are you going ?"
        value={inputText}
        onChangeText={setinputText}
      />

      <FlatList
        data={search}
        renderItem={({ item }) => (

          <Pressable onPress={()=>navigation.navigate('Guests')} style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={35} />
            </View>

            <Text style={styles.locationDetails}>{item.description}</Text>
          </Pressable>


        )}
      />


    </View>
  )
}

