import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({cityHandler}) {
  const [city, setCity] = useState('');

  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyBvVUI66FZem9I3FIFvxOxcUvKK3zns_Og', language: 'en'}}
        textInputProps={{
          onChangeText: text => setCity(text),
        }}
        placeholder="Search"
        styles={{
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
          },

          textInput: {
            height: 38,
            backgroundColor: '#eee',
            fontSize: 16,
            borderRadius: 20,
            fontWeight: '700',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} color={'#767676'} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity
            onPress={() => {
              console.log(city);
              cityHandler(city);
            }}
            style={{
              flexDirection: 'row',
              marginRight: 10,
              backgroundColor: 'white',
              padding: 6,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{marginRight: 6}}
              color={'#767676'}
            />
            <Text style={{color: '#767676'}}>Search</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
