import React from 'react';
import { Animated, Dimensions, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  block: {
    backgroundColor: 'black',
    height: 32
  }
});

const MSEC_IN_FRAME = 1000 / 60;

export default function App() {
  const [width] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(width, {
      toValue: 350,
      duration: MSEC_IN_FRAME * 350
    }).start();
  }, []); // MEMO: Animated使うときは依存でわたさんでも動く

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.block, { width }]} />
    </View>
  );
}