import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import DestinationSearchScreen from '../screens/DestinationSearch'
import Guests from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();


export default Router = (props)=> {
  return (
    <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{headerShown:false}}  />

    


     <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen} options={{title:"Search your destination"}} />


        <Stack.Screen name={"Guests"} component={Guests} options={{title:"How many people"}} /> 


        </Stack.Navigator>
    </NavigationContainer>
  )
}

