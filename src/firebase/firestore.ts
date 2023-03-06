import { collection, doc, DocumentReference, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "./firebase-config";
import { ProductInCart } from "../redux/cartSlice";

export const sendCart = async (cart: ProductInCart[]) => {
  const usersRef = collection(firestore, 'users');
  const userName = auth.currentUser?.displayName;
  if (userName) {
    await setDoc(doc(usersRef, userName), {
      name: userName,
      cart: cart,
    });
  }
};

export const getCart = async () => {
  const userName = auth.currentUser?.displayName;
  let docRef: DocumentReference | undefined;
  if (userName)
    docRef = doc(firestore, 'users', userName);
  if (docRef) {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // Return loaded cart from firestore
      return docSnap.data().cart;
    } else {
      console.log('No such document');
    }
  }
};