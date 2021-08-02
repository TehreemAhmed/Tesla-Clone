import React from 'react';
import { View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from "../CarItems/Index";
const CarsList =(props)=>{
    return (
       <View style={styles.cont}>
           <FlatList
               data={cars}
               showsVerticalScrollIndicator={false}
              renderItem={({item}) => <CarItem car={item}/>}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              snapToInterval={Dimensions.get('window').height}

           />
       </View>
    );
}

export default CarsList;