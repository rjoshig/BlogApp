import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import LeftDrawerNavigator from './navigations/LeftDrawerNavigator'

export default function Main() {
  return (
    <NavigationContainer>
      <LeftDrawerNavigator></LeftDrawerNavigator>
    </NavigationContainer>
  )
}
