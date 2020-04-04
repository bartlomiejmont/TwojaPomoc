import React from'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Header from './components/Header'
import Navigator from './routes/homeStack';

const App =() =>{
  return (
    <Navigator/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:60,
  },

});

export default App;