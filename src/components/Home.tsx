import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UserSettingsContext from '../contexts/user-settings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const { locale, theme } = React.useContext(UserSettingsContext);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>locale: {locale}</Text>
      <Text>theme: {theme}</Text>
    </View>
  );
}
