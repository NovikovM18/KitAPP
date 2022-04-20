import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const user = {id: '1', name: 'Вуйче', ballance: 1162};

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{user.name}, {user.ballance}$</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingRight: 10,
    backgroundColor: '#000',
    
  },
  title: {
    fontSize: 22,
    color: '#666',
    fontWeight: '500',
    textAlign: 'right',
  },
});
