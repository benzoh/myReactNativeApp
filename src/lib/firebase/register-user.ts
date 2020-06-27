import auth from '@react-native-firebase/auth';

export default async function registerUser(mailAddress: string, password: string) {
  const responce = await auth().createUserWithEmailAndPassword(mailAddress, password);

  if (!responce.user) {
    throw new Error('user information is null');
  }

  const {
    uid: id,
    displayName: name,
    photoURL: photoUrl,
    metadata: { creationTime, lastSignInTime },
  } = responce.user;
  const createdAt = creationTime ? new Date(creationTime).getTime() : null;
  const lastLoginAt = lastSignInTime ? new Date(lastSignInTime).getTime() : null;

  return {
    id,
    name,
    mailAddress,
    photoUrl,
    createdAt,
    lastLoginAt,
  };
}
