import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Header({ title, navigation }) {

  const openDrawer = () => {
    navigation.toggleDrawer();
  }
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <Ionicons name="md-menu" size={32} color="green" onPress={openDrawer} style={styles.menu} />
      <View  style={{flexDirection:'row'}}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width-30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  menu: {
    position: 'absolute',
    left: 5
  },
  headerImage:{
    width:26,
    height:26,
    marginHorizontal:3
  }
})