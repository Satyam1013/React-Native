import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlatListCompo = ({ data }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.txt}>Name: {data.name}</Text>
      <Text style={styles.txt}>Age: {data.age}</Text>
      <Text style={styles.txt}>CIty: {data.city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    gap: 25,
    borderWidth: 2,
    margin: 5,
    padding: 10
  },
  txt: {
    color: 'blue',
    backgroundColor: 'yellow',
    padding: 5,
    gap: 2,
    width: 100
}
});

export default FlatListCompo;
