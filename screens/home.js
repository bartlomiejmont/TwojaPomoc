import React from'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Header from '../components/Header'

const Home =() =>{
  return (
    <View style={styles.container}>
        <Header/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:60,
  },

});

export default Home;