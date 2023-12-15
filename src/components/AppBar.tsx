import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.header}>
      <Text style={styles.header_titulo}>App Calculadora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "cadetblue",
  },
  header_titulo: {
    fontSize: 24,
    color: "white",
  },
});