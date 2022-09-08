import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import BottomTabs from '../Components/BottomTabs';
import Categories from '../Components/Categories';
import HeaderTabs from '../Components/HeaderTabs';
import RestaurantItem, {localRestaurants} from '../Components/RestaurantItem';
import {YELP_API_KEY_PATH, YELP_API_KEY_V1} from '@env';
import SearchBar from '../Components/SearchBar';
const YELP_API_KEY = YELP_API_KEY_V1;
export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `${YELP_API_KEY_PATH}=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json => {
        setRestaurantData(
          json.businesses.filter(buisness =>
            buisness.transactions.includes(activeTab.toLowerCase()),
          ),
        );
      });
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'eee'}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          RestaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
