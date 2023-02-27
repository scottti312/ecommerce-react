import { firebaseConfig } from "./firebase-credentials";

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.');
  } else {
    return firebaseConfig;
  }
}