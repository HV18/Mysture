import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import firebaseApp from '../../Config/FireBaseConfig';

const auth = getAuth(firebaseApp);

export async function registerUserWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User registered:', user);
    return { success: true, user };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, error };
  }
}

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOutUser() {
  return signOut(auth);
}
