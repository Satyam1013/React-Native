import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const Listings = () => {
  const data = [
    { id: 1, name: "satyam" },
    { id: 2, name: "shivam" },
    { id: 3, name: "sundram" },
    { id: 4, name: "pallavi" },
    { id: 5, name: "poonam" },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.txt}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    borderWidth: 2,
    backgroundColor: "violet",
    color: "yellow",
    margin: 20,
    padding: 10,
  },
});
export default Listings;
