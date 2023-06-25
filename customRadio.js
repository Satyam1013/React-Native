import React from 'react'
import { View } from 'react-native'

const CustomRadioButton = () => {
    const programmingLanguages = [
        { id: 1, skill: "Python" },
        { id: 2, skill: "JavaScript" },
        { id: 3, skill: "Java" },
        { id: 4, skill: "C++" },
      ];
      const [mark, setMark] = useState(1);
  return (
    <View >
 {programmingLanguages.map((item, index) => (
        <TouchableOpacity onPress={() => setMark(item.id)} key={index}>
          <View style={styles.radioFlx}>
            <View style={styles.outerBox}>
              {mark === item.id ? <View style={styles.innerBox}></View> : null}
            </View>
            <Text style={styles.radioTxt}>{item.skill}</Text>
          </View>
        </TouchableOpacity>
      ))}

      //loader/////
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    radioTxt: {
      fontFamily: "sans",
      fontWeight: "bold",
      fontSize: 30,
    },
    radioFlx: {
      flexDirection: "row",
      gap: 10,
    },
    outerBox: {
      width: 40,
      height: 40,
      borderWidth: 2,
      borderRadius: 20,
      backgroundColor: "black",
    },
    innerBox: {
      width: 28,
      height: 28,
      backgroundColor: "cyan",
      margin: 4,
      borderWidth: 2,
      borderRadius: 20,
    },
  });
  

export default CustomRadioButton