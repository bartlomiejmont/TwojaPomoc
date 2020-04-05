import React from'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Header from '../components/Header'
import ButtonComponent from '../components/ButtonComponent';

const Home =() =>{
  return (
    <View style={styles.container}>
        <Header/>
        <ButtonComponent/>
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