import React from 'react'
import { View, Text } from 'react-native'

const SectionListCompo = ({data}) => {
  return (
    <View>
      <Text style={{marginLeft: 20, marginBottom: 10, fontFamily: 'sans-serif'}}>{data}</Text>
    </View>
  )
}

export default SectionListCompo
