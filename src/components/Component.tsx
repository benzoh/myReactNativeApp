import React from 'react';
import { FlatList, Text } from 'react-native';

interface Todo {
  title: string;
  isCompleted: boolean;
}

interface Props {
  completedTodos: Array<Todo>;
  numofCompleted: boolean;
}

export default function Component(props: Props) {
  return (
    <>
      <Text>{props.numofCompleted}</Text>;
      <FlatList data={completedTodos} renderItem={({ item }) => <Text>{item.title}</Text>} />
    </>
  );
}
