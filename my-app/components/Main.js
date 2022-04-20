import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gStyle } from '../styles/style';

const hotels = [
  {id: '1', name: 'Горобчик', description: 'м.Тернопіль'},
  {id: '2', name: 'Сонячник', description: 'м.Запоріжжя'},
  {id: '3', name: 'Водограй', description: 'м.Івано-Франківськ'},
];

export default function Main({ navigation }) {

  const loadScreen = () => {
    navigation.navigate('Hotel');
  };

  return (
    <View>
      <Text style={gStyle.title}>HOTELS</Text>
      <FlatList data={hotels} renderItem={({ item }) => (
        <TouchableOpacity style={styles.block} onPress={loadScreen}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    margin: 5,
    marginBottom: 0,
    borderRadius: 5,
  },
  name: {
    // backgroundColor: '#fefefe',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 24,
    color: '#666',
    fontWeight: '900',
  },
  description: {
    // backgroundColor: '#fef',
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    fontWeight: '900',
    marginBottom: 5,
  },
});
