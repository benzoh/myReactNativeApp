import AsyncStorage from '@react-native-community/async-storage';

import { UserInformation } from '../../contexts/user';

const KEY = 'userinformation';

export async function save(userInformation: UserInformation) {
  await AsyncStorage.setItem(KEY, JSON.stringify(userInformation));
}

export async function retrieve() {
  const serrialized = await AsyncStorage.getItem(KEY);

  if (!serrialized) {
    return null;
  }

  return JSON.parse(serrialized);
}

export async function clear() {
  await AsyncStorage.removeItem(KEY);
}
