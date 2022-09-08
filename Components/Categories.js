import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-Up',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery-Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/soft.png'),
    text: 'Soft Drinks',
  },
];
export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingVertical: 10,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{alignItems: 'center', marginRight: 30}}>
            <Image
              source={item.image}
              style={{width: 50, height: 40, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 14, fontWeight: '900', color: '#767676'}}>
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
