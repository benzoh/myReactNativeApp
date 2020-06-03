import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

function calculateValueNeedsAlingTime(src: number) {
  // 実行時間が長い処理
}

export default function App() {
  const [state, setState] = React.useState(true);
  const update = React.useCallback(
    () => {
      setState(!state);
    },
    [state],
  )
  const value = React.useMemo(() => calculateValueNeedsAlingTime(0xffff), []);

  return (
    <View style={styles.container}>
      <Text onPress={update}>update {state.toString()}</Text>
      <Text>{value}</Text>
    </View>
  );
}