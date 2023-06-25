import React from 'react'
import { Button, StatusBar, View } from 'react-native'

const BarStatus = () => {
  return (
    <View>
      <StatusBar backgroundColor='red' barStyle={'dark-content'}/>
      <Button title='Change Theme'/>
    </View>
  )
}

export default BarStatus
