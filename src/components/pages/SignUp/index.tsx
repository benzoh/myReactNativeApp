import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Button, dismiss, TextField } from '../../atoms';
import { useControlledComponent } from '../../../lib/hooks';
import { Context, Status } from '../../../contexts/ui';
import testIDs from '../../../constants/testIDs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default function SignUp() {
  const { setApplicationState } = React.useContext(Context);
  const mailAddress = useControlledComponent('');
  const password = useControlledComponent('');

  return (
    <TouchableWithoutFeedback onPress={dismiss} testID={testIDs.SIGN_UP}>
      <View style={styles.container}>
        <TextField
          label="email"
          value={mailAddress.value}
          onChangeText={mailAddress.onChangeText}
          style={styles.text}
          autoCompleteType="email"
          testID={testIDs.SIGN_UP_EMAIL}
        />
        <TextField
          label="password"
          value={password.value}
          onChangeText={password.onChangeText}
          style={styles.text}
          autoCompleteType="password"
          secureTextEntry={true}
          testID={testIDs.SIGN_UP_PASSWORD}
        />
        <Button
          onPress={() => setApplicationState(Status.AUTHORIZED)}
          style={styles.button}
          label="Register"
          testID={testIDs.SIGN_UP_REGISTER_BUTTON}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
