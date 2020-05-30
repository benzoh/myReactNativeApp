import React from 'react';
import { Dimensions, ScaledSize, AppState, Clipboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

interface NewSizes {
  window: ScaledSize;
  screen: ScaledSize;
}

export default function App() {
  const [windowSize, setWindowSize] = React.useState(Dimensions.get('window'));
  const [screenSize, setScreenSize] = React.useState(Dimensions.get('screen'));

  function setSize(newSizes: NewSizes) {
    setWindowSize(newSizes.window);
    setScreenSize(newSizes.screen);
  }

  React.useEffect(() => {
    Dimensions.addEventListener('change', setSize);
    return () => {
      Dimensions.removeEventListener('change', setSize);
    };
  });

  return (
    <View style={styles.container}>
      <Text>
        Window ({windowSize.width}, {windowSize.height})
      </Text>
      <Text>
        Screen ({screenSize.width}, {screenSize.height})
      </Text>
    </View>
  );
}