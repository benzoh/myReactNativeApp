import React from 'react';
import { BackHandler, View, Text } from 'react-native';

export default function App() {
  React.useEffect(() => {
    const BackHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      console.warn('hardware back passed');
      return true;
    });

    return () => {
      BackHandler.remove();
    };
  }, []);

  return (
    <View />
  );
}