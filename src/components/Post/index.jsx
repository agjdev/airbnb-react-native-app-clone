import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import styles from './styles';


export default Post = (props)=> {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* image */}
      <Image style={styles.image} source={{uri:post.image}}/>
      <Text style={styles.bedrooms}> {post.bed} Bed & {post.bedroom} BedRoom</Text>
      <Text style={styles.desc} numberOfLines={2}>{post.type} . {post.description}.</Text>
      <Text style={styles.prices}><Text style={styles.oldprice}>${post.oldPrice} </Text>  <Text style={styles.newprice}>${post.newPrice}</Text>/night</Text>
      <Text style={styles.totalprice}>Total $ {post.totalPrice}</Text>
    </View>
  )
}

