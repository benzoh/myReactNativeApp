import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={newValue => {
          setValue(newValue)
        }}
      />
    </View>
  );
}

