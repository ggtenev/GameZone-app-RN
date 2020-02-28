import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'


import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    // navigationOptions: {
    //  headerTitle: () => <ReviewDetails title='Details'  />
    // }
    // ({ navigation }) => {
    //   return {
    //     headerTitle: () => <Header title='GameZone' navigation={navigation} />,
    //   }
    // }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#eee',
      height: 80
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    headerTintColor: '#444'
  },

})

export default HomeStack;