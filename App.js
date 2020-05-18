/* eslint-disable react-native/no-color-literals */

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import * as React from 'react'
import { Platform, StyleSheet } from 'react-native'

import Main from './src/Main'
;<script src="http://localhost:8097/"></script>

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
}

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
})

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main></Main>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
})
