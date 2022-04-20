import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function No({ navigation }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Нема грошей?..</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.description}>На головну</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: '100%',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: '#666',
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    fontWeight: '900',
    marginBottom: 5,
  },
  button: {
    marginHorizontal: 'auto',
    width: 200,
    height: 50,
    backgroundColor: '#66acdc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});