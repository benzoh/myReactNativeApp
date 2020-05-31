import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Vibration } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Vibration.vibrate(1000)
        }}
      >
        <Text>Vibrate</Text>
      </TouchableOpacity>
    </View>
  );
}