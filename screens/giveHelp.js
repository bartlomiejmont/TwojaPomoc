import React, { useState } from'react';
import {
  View,
  ActivityIndicator,
  Text
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const GiveHelp =() =>{

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  function getRequests() {
    return fetch ('http://localhost:8080/requests')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }

  return (
    <View >
      {isLoading ? <ActivityIndicator/> : (
        <FlatList data={data} 
        keyExtractor={({id},index) => id}
        renderItem={({item}) => (
        <Text>{item.city}</Text>
        )}
        />
      )}
    </View>
  );
};

export default GiveHelp;