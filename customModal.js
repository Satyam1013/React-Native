import React, { useState } from "react";
import { Button, StyleSheet, View, Modal } from "react-native";

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.modalSpace}>
          <View style={styles.insContent}>Hello Satyam Banwale</View>
          <Button title="Close Modal" onPress={() => setShow(false)} />
        </View>
      </Modal>
      <View style={styles.opnBtn}>
        <Button title="Open Modal" onPress={() => setShow(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 1,
    alignItems: "center",
  },
  insContent: {
    textAlign: "center",
  },
  opnBtn: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalSpace: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomModal;
