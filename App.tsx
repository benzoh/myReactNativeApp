import React from 'react';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

async function onShare() {
  try {
    await Share.share({
      title: 'タイトル',
      message: '共有したいメッセージ',
    })
  } catch (e) {
    console.log(e);
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onShare}>
        <Text>Share</Text>
      </TouchableOpacity>
    </View>
  );
}