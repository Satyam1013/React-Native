import React from "react";
import { SectionList, View, Text, StyleSheet } from "react-native";
import SectionListCompo from "./SectionListCompo";

const Main = () => {
  const users = [
    {
      name: "Satyam",
      data: ["html", "css", "react", "python"],
    },
    {
      name: "Alex",
      data: ["C#", "ASP.NET", "SQL Server", "Azure"],
    },
    {
      name: "Sophia",
      data: ["Ruby", "Rails", "PostgreSQL", "Heroku"],
    },
    {
      name: "Emily",
      data: ["Java", "Spring", "Hibernate", "MySQL"],
    },
    {
      name: "John",
      data: ["JavaScript", "HTML", "CSS", "Node.js"],
    },
  ];
  return (
    <View>
      <SectionList
        sections={users}
        renderItem={({ item }) => <SectionListCompo data={item} />}
        renderSectionHeader={({ section: { name } }) => <Text style={styles.head}>{name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
head: {
    color: 'green',
    backgroundColor: 'cyan',
    textAlign: 'center',
    margin: 5,
    padding: 5,
    fontWeight: 'bold'

}
})

export default Main;
