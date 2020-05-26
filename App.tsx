import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import useControlledComponent from './lib/hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 256,
    padding: 4,
  }
});

export default function App() {
  const familyName = useControlledComponent('');
  const personalName = useControlledComponent('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...familyName} />
      <TextInput style={styles.input} {...personalName} />
      <Text>{familyName.value} {personalName.value}</Text>
    </View>
  );
}

