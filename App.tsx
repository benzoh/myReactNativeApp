import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    width: 256
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <ProgressBar />
      <View style={styles.wrapper}>
        <ProgressBar styleAttr="Horizontal" />
      </View>
      <View style={styles.wrapper}>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.37}
        />
      </View>
    </View>
  );
}