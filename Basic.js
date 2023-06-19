import { View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styleX from './style'

const Basic = () => {
    const [name,setName] = useState('Satyam')
  const x =() => {
  setName('Pallavi')
  console.warn('Mind It')
  }

  //inline style at line no.16
  return (
    <View>
    <Text style={{fontFamily:'sans', textAlign: 'center', fontWeight:'bold', fontSize: '32px'}}>{name}</Text>
    <Button title='Click Me' color='blue' onPress={x}/>
    <StatusBar style="auto" />
    <Text style={styleX.textBox}>Another Experiment</Text>
 
</View>
  )
}

//internal styles
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

  
export default Basic
