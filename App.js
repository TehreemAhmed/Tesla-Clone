import React from 'react';
import { SafeAreaView, StyleSheet,View} from 'react-native';
import CarItem from './components/CarItems/Index';
import StyledButton from './components/StyledButton';
import CarsList from './components/CarsList/Index';
import Header from './components/header/Index';
export default function App() {
  return (
 
  <View style={styles.container}>
<Header/>
<CarsList/>
  </View>
 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width:"100%",
    height:"100%",
    
  },
  titles: {
    width:"100%",
    height:"100%",
    marginTop:100,
    alignItems: 'center',
  },
  title: {
    fontSize:40,
    fontWeight:'800'
  },
  subtitle: {
    fontSize:16,
    color:'grey'
  },
  image:{
  width:"100%",
  height:"100%",
  resizeMode:'cover',
  position:"absolute"
  },

});
