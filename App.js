import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/common/Header';
import StartScreen from './components/screens/StartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Gues a number" />
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
