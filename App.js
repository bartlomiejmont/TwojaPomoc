import React from'react';
import {
  StyleSheet,
} from 'react-native';

import Navigator from './routes/homeStack';

const App =() =>{
  return (
    <Navigator/>
  );
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