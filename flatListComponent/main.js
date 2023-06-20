import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FlatListCompo from "./FlatListCompo";

const Main = () => {
  const data = [
    {
      name: "satyam",
      age: 24,
      city: "Balaghat",
    },
    {
      name: "John",
      age: 30,
      city: "New York",
    },
    {
      name: "Emily",
      age: 27,
      city: "London",
    },
    {
      name: "Alex",
      age: 42,
      city: "San Francisco",
    },

    {
      name: "Michael",
      age: 35,
      city: "Sydney",
    },
  ];
  return (
    <View >
      <FlatList
        data={data}
        renderItem={({ item }) => <FlatListCompo data={item} />}
      />
    </View>
  );
};



export default Main;
