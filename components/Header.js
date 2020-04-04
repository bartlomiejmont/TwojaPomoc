import React from'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Header = () =>{
  return (
    <View style={styles.header}>
      <Text style={styles.text} >Twoja Pomoc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    height: 60,
    padding: 15,
    backgroundColor:'darkslateblue',
    },
    text: {
        fontSize: 40,
        textAlign: "center",
        color: "#fff"
    }

});

export default Header;