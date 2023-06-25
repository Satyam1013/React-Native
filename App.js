import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Forms from "./Forms";
import Basic from "./Basic";
import Listings from "./Listings";
import Class from "./classComponent/Class";
import Main from "./sectionListComponent/Main";
import HookUseEffct from "./HookUseEffct";
import { useState } from "react";
import CustomModal from "./customModal";
import PressType from "./typesOfPress";
import BarStatus from "./statusBar";
import VerjonCheck from "./versionChecker";
import WebbView from "./webView";

export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}

//internal styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
