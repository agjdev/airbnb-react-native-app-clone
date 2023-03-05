import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

export default GuestsScreen = (props) => {
    const [adults, setadults] = useState(0);
    const [children, setchildren] = useState(0);
    const [infants, setinfants] = useState(0);
    return (
        <>
            <View style={styles.row}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                <Text style={{ color: '#B1B1B1' }}>Ages 18 or above</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={()=> setadults(Math.max(0,adults - 1))}  style={styles.button}>

                    <Text>-</Text>

                </Pressable>

                <Text style={{ marginHorizontal: 15 }}>{adults}</Text>

                <Pressable onPress={()=> setadults(adults + 1)} style={styles.button}>

                    <Text>+</Text>

                </Pressable>
            </View>

        </View>

        <View style={styles.row}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Children</Text>
                <Text style={{ color: '#B1B1B1' }}>Ages 2 - 18</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={()=> setchildren(Math.max(0,children - 1))}  style={styles.button}>

                    <Text>-</Text>

                </Pressable>

                <Text style={{ marginHorizontal: 15 }}>{children}</Text>

                <Pressable onPress={()=> setchildren(children + 1)} style={styles.button}>

                    <Text>+</Text>

                </Pressable>
            </View>

        </View>

        <View style={styles.row}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>infants</Text>
                <Text style={{ color: '#B1B1B1' }}>Under 2</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={()=> setinfants(Math.max(0,infants - 1))}  style={styles.button}>

                    <Text>-</Text>

                </Pressable>

                <Text style={{ marginHorizontal: 15 }}>{infants}</Text>

                <Pressable onPress={()=> setinfants(infants + 1)} style={styles.button}>

                    <Text>+</Text>

                </Pressable>
            </View>

        </View>
        <View>
            <Pressable style={{backgroundColor:'#1a9de1',color:'#fff',justifyContent:'center',borderRadius:4,alignItems:'center',marginBottom:20,marginHorizontal:20,height:50}}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Search</Text>
            </Pressable>
        </View>
        </>
    

        
    )
}

