import React from "react";
import { View, Platform, Text, StyleSheet } from "react-native";

const VerjonCheck = () => {
  return (
    <View>
      <Text style={styles.txt}>{Platform.OS}</Text>
      {Platform.OS === "web" ? (
        <View
          style={{ width: 30, height: 30, backgroundColor: "orange" }}
        ></View>
      ) : (
        <View style={{ backgroundColor: "red", width: 25, height: 25 }}></View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    color: Platform.OS === "web" ? "blue" : "red",
    fontSize: 30,
  },
});

export default VerjonCheck;
