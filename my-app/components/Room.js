import React from 'react';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/style';

const user = {id: '1', name: 'Вуйче', ballance: 1162};

export default function Room({ navigation, route }) {
  function bying() {
    if (user.ballance >= route.params.coast) {
      navigation.navigate('Ok') 
    } else {
      navigation.navigate('No')
    }
  };

  if (route.params.en) {
    return (
      <View>
        <Text style={gStyle.title}>DETAILS</Text>
        <Text style={styles.description}>№ {route.params.number}</Text>
        <Text style={styles.description}>{route.params.name}</Text>
        <Text style={styles.description}>Рента: {route.params.coast}USD</Text>
        <Image
          source={require('../assets/br.jpg')}
          style={styles.img} 
        />
        <TouchableOpacity style={styles.button} onPress={bying}>
          <Text style={styles.description}>Забронювати</Text>
        </TouchableOpacity> 
      </View>
    );
  } else {
    return (
      <View>
        <Text style={gStyle.title}>DETAILS</Text>
        <Text style={styles.description}>№ {route.params.number}</Text>
        <Text style={styles.description}>{route.params.name}</Text>
        <Text style={styles.description}>Рента: {route.params.coast}USD</Text>
        <Image
          source={require('../assets/br.jpg')}
          style={styles.img} 
        />
        <Text style={styles.description}>Номер зайнятий до ...</Text>
    </View>
    )
  }

}

const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    margin: 5,
    marginBottom: 0,
    borderRadius: 5,
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 24,
    color: '#666',
    fontWeight: '900',
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    fontWeight: '900',
    marginBottom: 5,
  },
  img: {
    marginHorizontal: 'auto',
    marginVertical: 20,
    width: 300,
    height: 200,
  },
  button: {
    marginHorizontal: 'auto',
    width: 200,
    height: 50,
    backgroundColor: 'yellowgreen',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
