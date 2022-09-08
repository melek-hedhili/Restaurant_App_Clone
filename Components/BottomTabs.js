import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginHorizontal: 30,
      }}>
      <Icon icon="home" text={'home'} />
      <Icon icon="search" text={'Browse'} />
      <Icon icon="shopping-bag" text={'Grocery'} />
      <Icon icon="receipt" text={'Orders'} />
      <Icon icon="user" text={'Account'} />
    </View>
  );
}
const Icon = props => (
  <TouchableOpacity>
    <View style={{alignItems: 'center'}}>
      <FontAwesome5 name={props.icon} size={25} color={'#767676'} />
      <Text style={{color: '#767676'}}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
