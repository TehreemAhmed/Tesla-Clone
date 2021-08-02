import React from 'react';
import { View, Text,ImageBackground, ProgressViewIOSComponent, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton'
const CarItem=(props)=>{
const{name,tagline,image}=props.car;
return(
              <View style={styles.carContainer}>
           
      <ImageBackground source={image}
      style={styles.image}/>
       {/* <Image source={require('../../assets/images/logo.png')}  style={styles.logo} /> */}
      <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{tagline}</Text>
      <View style={styles.buttonContainer}>
      <StyledButton type='primary' 
      content={"Custom order"}
      onPress={()=>{console.warn("Custom order was pressed");}}
      />
      <StyledButton type='Secondary' 
      content={"Existing Inventory"}
      onPress={()=>{console.warn("Existing Inventory was pressed");}}
      />
      </View>
      </View>
      </View>

)};
export default CarItem;