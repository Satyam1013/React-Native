import React from "react";
import { Button, Pressable, Text, View } from "react-native";

const PressType = () => {
  return (
    <View>
      <Pressable
        onPress={() => console.log("Press Only")}
        onLongPress={() => console.log("Long Press Only")}
        onPressIn={() => console.log("In Press Only")}
        onPressOut={() => console.log("Out Press Only")}
      >
        <Text>Hi Click ME</Text>
      </Pressable>
    </View>
  );
};

export default PressType;
