import React, { useState, useEffect } from'react';
import {
  View,
  ActivityIndicator,
  Text,
  FlatList
} from 'react-native';


const GiveHelp = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch ('http://localhost:8080/requests')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  });

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