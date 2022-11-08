import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

//Screens
import ProductContainer from './Screens/Products/ProductContainer'


export default function App() {
  return (
    <View style={styles.container}>
      
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    Color: '#32a852',

    backgroundColor: '#32a852',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
