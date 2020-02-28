import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import About from '../screens/About'
import Header from '../shared/Header'


const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About' navigation={navigation} />,
      }
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#eee'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    headerTintColor: '#444'
  },
})

export default AboutStack;