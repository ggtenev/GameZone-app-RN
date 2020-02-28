import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import aboutStack from './aboutStack'
import homeStack from './homeStack'

const RootDrawerNavigation = createDrawerNavigator({
    Home:{screen:homeStack},
    About:{screen:aboutStack}
})

export default createAppContainer(RootDrawerNavigation)