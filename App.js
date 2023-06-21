import { StyleSheet, View } from 'react-native';
import Forms from './Forms';
import Basic from './Basic';
import Listings from './Listings';
import Class from './classComponent/Class'
import Main from './sectionListComponent/Main';
import HookUseEffct from './HookUseEffct';

export default function App() {

  return (
    <View style={styles.container}>
    yo
    </View>
    
  );
}

//internal styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
