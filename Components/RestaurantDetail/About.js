import React from 'react';
import {View, Text, Image} from 'react-native';

export default function About(props) {
  const {name, image, price, reviews, rating, categories} = props.route.params;
  const formattedCategories = categories.map(cat => cat.title).join(' • ');
  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View style={{borderBottomWidth: 1.5, borderBottomColor: '#B5B5B5'}}>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = props => (
  <View>
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
  </View>
);

const RestaurantName = props => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '800',
      marginTop: 10,
      marginHorizontal: 15,
      color: '#767676',
    }}>
    {props.name}
  </Text>
);
const RestaurantDescription = props => (
  <Text
    style={{
      color: '#767676',
      marginHorizontal: 15,
      marginTop: 15,
      fontWeight: '400',
      fontSize: 15.5,
      paddingBottom: 10,
    }}>
    {props.description}
  </Text>
);
