import React from 'react';
import {Text, View,Image} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>Hello, I am {props.name}!!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
    <Image
        source={{
          uri: 'https://www.rd.com/wp-content/uploads/2021/02/GettyImages-976761184-e1612814343752.jpg',}}
        style={{width: 300, height: 180}}/>
      <Cat name="Ella 7yrs old and I have 2younger sibilings"/>
      
      <Image
        source={{
          uri: 'https://coleandmarmalade.com/wp-content/uploads/2018/12/tabby-kitten-1517450_1280.jpg',
        }}
        style={{width: 270, height: 135}}
      />
      <Cat name="Ginger 2yrs old" />
      
      <Image
        source={{
          uri: 'https://wallpapercave.com/wp/wp2618926.jpg',
        }}
        style={{width: 250, height:160}} />
      <Cat name="Tom,2months old kitten" />
    </View>
  );
};

export default Cafe;
