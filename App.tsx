import React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  myComponent: {
    width: 256,
    height: 32
  }
});

interface Props {
  style?: ViewStyle;
}

function MyComponent(props: Props) {
  const style = React.useMemo(
    () => StyleSheet.compose(styles.myComponent, props.style),
    [props.style],
  );

  return (
    <View style={style}>
      <Text>style指定可能なコンポーネント</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <MyComponent style={{ backgroundColor: 'red' }} />
    </View>
  );
}