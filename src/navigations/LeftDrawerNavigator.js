import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'

import LeftDrawerContent from '../screens/LeftDrawerContent'
import StackNavigator from '../navigations/StackNavigator'
import HomeScreen from '../screens/HomeScreen'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const Drawer = createDrawerNavigator()

export default function LeftDrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <LeftDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={StackNavigator} />
    </Drawer.Navigator>
  )
}

// <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>

// <Drawer.Screen name="Home" component={HomeScreen} />
