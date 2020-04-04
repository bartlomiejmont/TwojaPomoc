import React from'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Header from './components/Header'
import ButtonComponent from './components/ButtonComponent';

const App =() =>{
  return (
    <View style={styles.container}>
        <Header/>

        <ButtonComponent style={styles.button}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 30,
    justifyContent: "space-between",
    backgroundColor: "#ae81ff",
  },

  button:{
    flex: 0.8,
  }


});

export default App;