import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {db} from '../firebase';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from 'firebase/firestore';
import MenuItems from '../Components/RestaurantDetail/MenuItems';

const OrderCompleted = ({navigation}) => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      },
    ],
  });

  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'orders'), orderBy('createdAt', 'desc'), limit(1)),
      snapshot => {
        snapshot.docs.map(doc => {
          setLastOrder(doc.data());
          console.log('last order', lastOrder.item);
        });
      },
    );
    return () => unsub();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 15, alignItems: 'center', height: '100%'}}>
        <LottieView
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{color: '#767676', fontSize: 20, fontWeight: 'bold'}}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckBox={true} />
          <LottieView
            style={{height: 200, alignSelf: 'center'}}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            loop={false}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{
                marginTop: 40,
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                padding: 15,
                borderRadius: 30,
                width: '100%',
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginLeft: 30,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Go To menu
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({});
