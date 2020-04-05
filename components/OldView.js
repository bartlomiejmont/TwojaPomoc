import React, { useState } from'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const OldView = () =>{

  const [miasto, setMiasto] = useState('');
  const [ulica, setUlica] = useState('');
  const [tel, setTel] = useState('');


  const addRequest = () =>fetch('http://localhost:8080/requests', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      city: miasto,
      street: ulica,
      phone: tel,
      publishDate: '2020-04-05T04:47:01.811242',
      description: 'zakupy',
      isActive: true
    }),
  });

  onPressedButton = () =>{
    console.log(miasto)
  }

  return (
    <View style={styles.viewAll}>

        <View style={styles.view1}>
          <TouchableOpacity style={styles.button} >
              <Text style={styles.text}>Wybierz Rodzaj Pomocy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text}>Podaj Swój Adres</Text>

          <TextInput style={styles.inputedText} placeholder='Miasto' onChangeText={miasto => setMiasto(miasto)}></TextInput>

          <TextInput style={styles.inputedText} placeholder='Ulica' onChangeText={ulica => setUlica(ulica)}></TextInput>

          <TextInput style={styles.inputedText} placeholder='Tel.' onChangeText={tel => setTel(tel)}></TextInput>
        </View>

        <View style={styles.view3}>

          <TouchableOpacity style={styles.button} onPress={(e) => addRequest()}>
            <Text style={styles.text}>Dodaj ogłoszenie</Text>
          </TouchableOpacity>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    
    viewAll: {
        padding: 30,
        backgroundColor: "#5EF092",
        height: '100%',
    },

    view1: {

      // flex: 0.1,

    },

    view2: {

      // flex:0.4,
      justifyContent: "space-between",
      paddingTop: 20,

    },

    view3: {

      // flex: 0.1,
      paddingTop: 40,

    },

    button: {
      // flex: 1,
      backgroundColor: "#5780E0",
      justifyContent: "center",

    },



    text: {
      
      fontSize: 20,
      textAlign: "center",
    },

    inputedText: {

      color: "black",
      borderColor: "#A66EFA",
      borderWidth: 3,

    }
});

export default OldView;