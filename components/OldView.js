import React from'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const OldView = () =>{
  return (
    <View style={styles.viewAll}>

        <View style={styles.view1}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Wybierz Rodzaj Pomocy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text}>Podaj Swój Adres</Text>

          <TextInput style={styles.inputedText}>

          </TextInput>

          <TextInput style={styles.inputedText}>

          </TextInput>

          <TextInput style={styles.inputedText}>

          </TextInput>
        </View>

        <View style={styles.view3}>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Dodaj ogłoszenie</Text>
          </TouchableOpacity>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    
    viewAll: {
        flex: 1,
        padding: 30,
        backgroundColor: "#5EF092",
        
    },

    view1: {

      flex: 0.1,

    },

    view2: {

      flex:0.4,
      justifyContent: "space-between",
      paddingTop: 20,

    },

    view3: {

      flex: 0.1,
      paddingTop: 40,

    },

    button: {
      flex: 1,
      backgroundColor: "#5780E0",
      justifyContent: "center",

    },



    text: {
      
      fontSize: 20,
      textAlign: "center",
    },

    inputedText: {

      color: "black",
      textDecorationLine: "underline",
      borderColor: "#A66EFA",
      borderWidth: 3,

    }

    

});

export default OldView;