import React from 'react';
import { Animated, View, StyleSheet, Easing } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  block: {
    height: 32
  }
});

export default function App() {
  const [width] = React.useState(new Animated.Value(0));
  const [color] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(color, {
        toValue: 100,
        duration: 2500,
        useNativeDriver: true
      }),
      Animated.sequence([
        Animated.spring(width, {
          toValue: 256,
          friction: 4,
          useNativeDriver: true
        }),
        Animated.timing(width, {
          toValue: 0,
          duration: 1500,
          easing: Easing.bounce,
          useNativeDriver: true
        })
      ])
    ]).start(() => {
      setTimeout(() => {
        width.setValue(0)
        color.setValue(0)
      }, 100)
    });
  }, []);

  const backgroundColor = color.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgb(0, 128, 128)', 'rgb(128, 0, 128)'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.block, { width, backgroundColor }]} />
    </View>
  )
}