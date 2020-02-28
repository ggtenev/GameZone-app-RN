import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    marginVertical:5,
    padding:10,

  },
  content:{
    marginLeft:18
  }
})
