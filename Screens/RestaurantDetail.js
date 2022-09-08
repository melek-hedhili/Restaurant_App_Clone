import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import About from '../Components/RestaurantDetail/About';
import MenuItems from '../Components/RestaurantDetail/MenuItems';
import ViewCart from '../Components/RestaurantDetail/ViewCart';
const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    title: 'Caesar Salad',
    description: 'With butter lettuce , tomato and sauce bechamel',
    price: '$9.50',
    image:
      'https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_1920,c_limit/0328-ceasar-salad-lede.jpg',
  },
];

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
      <ScrollView>
        <About route={route} />

        <MenuItems RestaurantName={route.params.name} foods={foods} />
      </ScrollView>
      <ViewCart navigation={navigation} />
    </View>
  );
}
