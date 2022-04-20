import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const users = [
  {id: '1', name: 'Вуйче', ballance: 162},
  {id: '2', name: 'Мольфар', ballance: 1467},
]

export default function Login({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Main');
  }

  return (
    <View>
      <TextInput
        placeholder='name'
      />
      <TextInput
        placeholder='password'
      />
      <Button onPress={handleLogin}/>
    </View>
  );
};
