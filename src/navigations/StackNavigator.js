import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from '../navigations/BottomTabNavigator'

import Feed from '../screens/Feed'
import HomeScreen from '../screens/HomeScreen'
import Profile from '../screens/Profile'
import Header from '../screens/Header'
import Preferences from '../screens/Preferences'
import Bookmarks from '../screens/Bookmarks'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'
import MyPosts from '../screens/MyPosts'

const Stack = createStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitle: 'Home' }} /> */}
      <Stack.Screen name="Feed" component={Feed} options={{ headerTitle: 'Feed' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: 'Profile' }} />
      <Stack.Screen name="Preferences" component={Preferences} options={{ headerTitle: 'Preferences' }} />
      <Stack.Screen name="Bookmarks" component={Bookmarks} options={{ headerTitle: 'Bookmarks' }} />
      <Stack.Screen name="Signin" component={Signin} options={{ headerTitle: 'Signin' }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerTitle: 'Signup' }} />
      <Stack.Screen name="MyPosts" component={MyPosts} options={{ headerTitle: 'My Posts' }} />
      <Stack.Screen name="NewPost" component={MyPosts} options={{ headerTitle: 'NewPost' }} />
      <Stack.Screen name="Settings" component={MyPosts} options={{ headerTitle: 'Settings' }} />

      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={({ route }) => {
          //    console.log('!@# options', { route })
          const routeName = route.state ? route.state.routes[route.state.index].name : 'BottomTabNavigator'
          return { headerTitle: routeName }
        }}
      />
    </Stack.Navigator>
  )
}
