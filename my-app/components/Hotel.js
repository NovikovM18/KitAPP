import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/style';

const rooms = [
  {id: '1', number: 13, name: 'Президентський номер', coast: 300, image: '../assets/pr.jpg', en: true},
  {id: '2', number: 77, name: 'Бюджетний номер', coast: 100, image: '../assets/br.jpg', en: false}
];

export default function Hotel({ navigation }) {
  return (
    <View>
      <Text style={gStyle.title}>ROOMS</Text>
        <FlatList data={rooms} renderItem={({ item }) => (
          <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('Room', item)}>
            <Text style={styles.name}>{item.number}</Text>
            <Text style={styles.description}>{item.name}</Text>
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
