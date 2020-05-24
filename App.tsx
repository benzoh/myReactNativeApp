import React from 'react';
import { SectionList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  label: {
    color: 'black',
    backgroundColor: 'white'
  },
  sectionHeader: {
    color: 'white',
    backgroundColor: 'black'
  }
});

const sections = [
  { title: 'basic', data: ['View', 'Text', 'Image'] },
  { title: 'list', data: ['FlatList', 'SectionList'] },
  { title: 'interaction', data: ['Touchable*', 'TextInput'] },
];

export default function App() {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderItem={({ item }) => <Text style={styles.label}>{item}</Text>}
      keyExtractor={(_, index) => index.toString()}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
    />
  );
}

