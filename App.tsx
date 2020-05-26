import React from 'react';
import { Switch, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  const [value, setValue] = React.useState(false);

  function onValueChange(newValue: boolean) {
    setValue(newValue)
  };

  return (
    <View style={styles.container}>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

