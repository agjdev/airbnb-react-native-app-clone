import { StyleSheet, Text, View , FlatList} from 'react-native';
import React from 'react';
import feed from '../../../assets/data/feed';
import post from '../../components/Post'

export default SearchResultsScreen = (props)=> {
  return (
    <View>
      <FlatList
      data={feed}
      renderItem={({item})=><Post post={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})