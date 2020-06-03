import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default function App() {
  const [count1, setCount1] = React.useState(0);
  const countUp1 = React.useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const [count2, setCount2] = React.useState(0);
  const countUp2 = React.useCallback(() => {
    setCount1(count2 + 1);
  }, [count2]);

  return (
    <View style={styles.container}>
      <Text onPress={() => { setCount1(count1 + 1) }}>{count1}</Text>
      <Text onPress={() => { setCount2(count2 + 1) }}>{count2}</Text>
    </View>
  );
}