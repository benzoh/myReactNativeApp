import * as React from 'react';
import Button from '../../atoms/Button';
import { Context, Status } from '../../../contexts/ui';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
});

export default function SignInWithGoogle() {
  const { setApplicationState } = React.useContext(Context);

  return (
    <Button
      onPress={() => setApplicationState(Status.AUTHORIZED)}
      icon="google"
      label="Sign in with Google"
      style={styles.button}
    />
  );
}
