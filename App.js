import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  label: {
    height: 400,
  },
});

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
];

export default function App() {
  const onEndReached = React.useCallback(() => {
    setTimeout(() => {
      data.push({
        id: new Date().getTime().toString(),
        title: 'foo',
      });
    }, 200);
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => <Text style={styles.label}>{item.title}</Text>}
      onEndReached={onEndReached}
    />
  );
}
