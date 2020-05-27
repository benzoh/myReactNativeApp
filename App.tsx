import React from 'react';
import { Alert, AppState, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function App() {
  const [state, setState] = React.useState<string>(AppState.currentState);

  function setAppState(newState: string) {
    setState(newState)
    if (newState === 'active') {
      Alert.alert('active');
    }
  }

  React.useEffect(() => {
    AppState.addEventListener('change', setAppState);
    return () => {
      AppState.removeEventListener('change', setAppState);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>{state}</Text>
    </View>
  );
}