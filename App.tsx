import React from 'react';
import { Platform, Text, View, StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const label = Platform.select({
  ios: 'iOS',
  android: 'Android'
})

const onPress = Platform.select({
  ios: () => {
    console.warn(Platform.OS, Platform.Version, Platform.isTV)
  },
  android: () => {
    console.warn(Platform.OS, Platform.Version, Platform.isTV)
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={onPress}>{label}</Text>
    </View>
  );
}