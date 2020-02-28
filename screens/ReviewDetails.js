import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global'

import Card from '../shared/Card'

export default function ReviewDetails({navigation}) {
  const rating = navigation.getParam('rating')
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
        <Text style={globalStyles.paragraph}>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.titleText}>Rating</Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rating:{
    borderTopColor:'#eee',
    borderTopWidth:1,
    width:'100%',
    height:60,
    justifyContent:'center',
    paddingTop:16,
    alignItems:'center',
    
  }
});