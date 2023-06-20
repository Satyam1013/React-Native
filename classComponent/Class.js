import { Component } from "react";
import { View, Text, TextInput } from "react-native";

class Don extends Component {
  constructor() {
    super();
    this.state = {
      name: "Anil",
      age: "",
      working: false,
    };
  }

  updateName(val) {
    this.setState({name:val})
}

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <TextInput placeholder="Enter Something" onChangeText={(el) => this.updateName(el)}/>
      </View>
    );
  }
}

export default Don;
