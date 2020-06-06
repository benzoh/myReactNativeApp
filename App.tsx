import React from 'react';
import { Animated, Dimensions, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Progress from './Progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    width: 256
  },
  button: {
    marginTop: 8
  }
});

export default function App() {
  const [progress, setProgress] = React.useState(Math.random());
  const updateProgress = React.useCallback(() => {
    setProgress(Math.random());
  }, []);

  return (
    <View style={styles.container}>
      <Progress progress={progress} style={styles.progress} color={'red'} />
      <TouchableOpacity onPress={updateProgress} style={styles.button}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  )
}