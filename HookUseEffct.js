import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";

const HookUseEffct = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState(10);
  const [count, setCount] = useState(0);

useEffect(() => {
    alert('HI')
},[count])

useEffect(() => {
    alert('Fetch Some data')
},[data])

  return (
    <View>
      <Button title="Count" onPress={() => setCount(count+1)} />
      <Button title="Data" onPress={() => setData(data+1)} />

      <Button title="show" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};

const Student = () => {
//   let timer = setInterval(() => {
//     // alert("Hi there");
//   }, 4000);

//   useEffect(() => {
//    return () => clearInterval(timer);
//   });

  return (
    <View>
      <Text>Satyam</Text>
    </View>
  );
};

export default HookUseEffct;
