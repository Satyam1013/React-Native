import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Text } from "react-native";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const clearInputs = () => {
    setEmail("");
    setPass("");
  };
  return (
    <>
      <View style={styles.box}>
        Fill Your Form
        <TextInput
          style={styles.inp}
          placeholder="Enter Email"
          value={email}
          onChangeText={(x) => setEmail(x)}
        />
        <TextInput
          style={styles.inp}
          placeholder="Enter Password"
          value={pass}
          onChangeText={(x) => setPass(x)}
        />
      </View>
      <View>
        <Text style={styles.txt}>{email}</Text>
        <Text style={styles.txt}>{pass}</Text>
      </View>
      <Button title="Clear Input" color="red" onPress={clearInputs} />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    borderWidth: 3,
  },
  txt : {
  padding: 20
  },
  inp: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default Forms;
