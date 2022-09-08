import {View, Text} from 'react-native';
import React, {useState} from 'react';
export default function OrderItem({item}) {
  const {title, price} = item;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
      }}>
      <Text style={{fontWeight: '600', fontSize: 16, color: '#767676'}}>
        {title}
      </Text>
      <Text style={{opacity: 0.7, fontSize: 16, color: '#767676'}}>
        {price}
      </Text>
    </View>
  );
}
