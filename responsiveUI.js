import React from "react";
import { View } from "react-native";

const Response = () => {
  return <View style={{ flex: 1, backgroundColor: "red", margin:2 }}>
  <View style={{ flex: 1, backgroundColor: "blue", flexDirection:'row' }}>
 <View style={{ flex: 1, backgroundColor: "cyan" }}></View>;
 <View style={{ flex: 1, backgroundColor: "green" }}></View>;
 <View style={{ flex: 1, backgroundColor: "black" }}></View>;

  </View>;
 <View style={{ flex: 1, backgroundColor: "purple" }}></View>;
 <View style={{ flex: 1, backgroundColor: "yellow" }}></View>;

 </View>
};

export default Response;
