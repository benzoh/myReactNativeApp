import React from 'react';
import { AppState, Clipboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default function App() {
  const [content, setContent] = React.useState('');
  React.useEffect(() => {
    function getContentOfClipboard() {
      Clipboard.getString().then(newContent => {
        setContent(newContent);
      });
    }

    getContentOfClipboard();
    AppState.addEventListener('change', getContentOfClipboard);

    return () => {
      AppState.removeEventListener('change', getContentOfClipboard);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          const newContent = 'present!!';
          Clipboard.setString(newContent);
          setContent(newContent);
        }}
      >
        <Text>set clipboard</Text>
      </TouchableOpacity>
      <Text>{content}</Text>
    </View>
  );
}