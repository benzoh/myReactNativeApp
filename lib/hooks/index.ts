import * as React from 'react';

export default function useControlledComponent(initialValue: string) {
  const [value, setValue] = React.useState(initialValue);

  function handleChange(newValue: string) {
    setValue(newValue);
  }

  return {
    value,
    onChangeText: handleChange,
  }
}