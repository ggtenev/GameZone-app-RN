import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { globalStyles } from '../styles/global'

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style = {globalStyles.titleText}>About</Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center'
    }
  });