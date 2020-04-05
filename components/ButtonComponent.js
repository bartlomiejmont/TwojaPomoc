import React from'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from 'react-native';

const ButtonComponent = ({nav}) =>{ 

  const pressHandlerNeedHelp = () =>{
    nav.push('Potrzebuje Pomocy');
  }
  const pressHandlerGiveHelp = () =>{
    nav.push('Chce Pomoc');
  }

  return (
    <View style={styles.viewStyle}>
      
    <TouchableOpacity style={styles.button} onPress={pressHandlerGiveHelp}>
      <Text style={styles.text}>Chcę Pomagać</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={pressHandlerNeedHelp}>
      <Text style={styles.text}>Potrzebuje Pomocy</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0.45,
    justifyContent: "center",
    backgroundColor: "#68228b",
    width: '80%',
    },

  viewStyle: {

    flex: 0.8,
    justifyContent: "space-between",
    paddingTop: 150,
    paddingBottom: 150,
    alignItems: "center",
    
  },

  text: {

    padding: 15,
    fontSize: 30,
    textAlign: "center",
    color: "white",

  }

  


});

export default ButtonComponent;