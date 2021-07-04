import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function App() {
  const scheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>{scheme}</Text>
      <StatusBar style="auto" />
    </View>
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
