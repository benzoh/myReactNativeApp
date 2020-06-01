import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>見えやすい文字列</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}