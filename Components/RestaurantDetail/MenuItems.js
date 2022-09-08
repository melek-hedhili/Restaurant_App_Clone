import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function MenuItems({
  RestaurantName,
  foods,
  hideCheckBox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: RestaurantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
  console.log('cartItems', cartItems);
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{borderRadius: 8, borderColor: 'lightgray'}}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={checkboxValue => selectItem(food, checkboxValue)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={{color: '#767676'}}>{props.food.description}</Text>
    <Text style={{color: '#767676'}}>{props.food.price}</Text>
  </View>
);
const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{marginLeft: marginLeft, width: 75, height: 75, borderRadius: 8}}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#eee',
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#767676',
  },
});
