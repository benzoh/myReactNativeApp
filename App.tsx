import React from 'react';
import { Alert, PermissionsAndroid, View } from 'react-native';

async function requestCameraPermission() {
  try {
    const isGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    console.log(isGranted);

    if (isGranted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('許可ありがとうございます');
    } else {
      Alert.alert('カメラを使うと便利ですよ！');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default function App() {
  React.useEffect(() => {
    requestCameraPermission();
  });

  return (
    <View />
  );
}