import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function useErrorModalDialog(initialErrors: Array<string>) {
  const [needsToShow, setNeedsToShow] = React.useState(true);
  const [errors, setErrors] = React.useState(initialErrors);

  React.useEffect(() => {
    if (0 < errors.length && needsToShow) {
      setNeedsToShow(false);
      Alert.alert(errors[0], undefined, [
        {
          text: 'OK',
          onPress: () => {
            console.log({ errors });
            setErrors(errors.filter((_, index) => index !== 0))
            setNeedsToShow(true)
          }
        }
      ]);
    }
  }, [needsToShow, errors])

  function addError(newError: string) {
    setErrors([...errors, newError]);
  }

  return addError;
}

export default function App() {
  const addError = useErrorModalDialog(['1st', '2nd', '3rd']);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          addError('new error');
        }}
      >
        <Text>Generate Alert</Text>
      </TouchableOpacity>
    </View>
  );
}