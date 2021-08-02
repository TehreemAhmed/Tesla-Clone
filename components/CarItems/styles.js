import { StyleSheet,Dimensions } from "react-native";
const styles=StyleSheet.create({
  
    carContainer: {
      width:"100%",
      height:Dimensions.get('window').height,
      
    },
    titles: {
      width:"100%",
      height:"100%",
      marginTop:90,
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
    // logo:
    // {
    //   width:"50%",
    //   height:"50%",
    //   resizeMode:'cover',
    //   marginLeft:20,
    //   position:"absolute",
    // },
    buttonContainer:{
      position:'absolute',
      bottom: 100,
      width:'100%',
    },
  
  });
   export default styles;