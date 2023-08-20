import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <Text>App</Text>
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    }
})