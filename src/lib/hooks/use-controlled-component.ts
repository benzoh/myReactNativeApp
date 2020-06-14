import React from 'react';

export default function useControllCompoenent<T>(initialValue: T) {
  const [value, setValue] = React.useState(initialValue);

  function onChangeText(newValue: T) {
    setValue(newValue);
  }

  return {
    value,
    onChangeText,
  };
}
