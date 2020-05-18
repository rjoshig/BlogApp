/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import { Text } from 'react-native'

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
}
