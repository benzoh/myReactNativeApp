import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

interface Data {
  count: number;
}

async function hydrate() {
  try {
    const data = await AsyncStorage.getItem('keyForData');

    if (data === null) {
      return { count: 0 };
    }
    return JSON.parse(data);
  } catch {
    return { count: 0 };
  }
}

async function persist(data: Date) {
  await AsyncStorage.setItem('keyForData', JSON.stringify(data));
}

export default function App() {
  const [count, setCount] = React.useState<number | null>(null);

  async function loadCount() {
    const data = await hydrate();
    const newCount = data.count + 1;
    setCount(newCount);
    persist({ count: newCount });
  }

  React.useEffect(() => {
    loadCount();
  }, []);

  const onPress = React.useCallback(async () => {
    AsyncStorage.clear();
    loadCount();
  }, []);

  if (count === null) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Text onPress={onPress}>{count}</Text>
    </View>
  );
}