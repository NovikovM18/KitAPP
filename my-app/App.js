import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Navigate from './navigate';
import Header from './components/Header';

export default function App() {

  return (
    <>
      <Header/>
      <Navigate />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
