import { StyleSheet, View } from 'react-native';
import Forms from './Forms';
import Basic from './Basic';
import Listings from './Listings';

export default function App() {
 
 

  return (
    
    <View style={styles.container}>
    <Listings/>
      
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
