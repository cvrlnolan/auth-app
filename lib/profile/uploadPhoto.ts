import { initFirebase, db } from "@/lib/firebaseInit";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";

initFirebase();

const storage = getStorage();
const auth = getAuth();

export default async function index(
  user: any,
  image?: File | Blob,
  picURL?: string
) {
  const userRef = ref(storage, `users/${user.uid}`);
  const userDoc = doc(db, "users", user.uid);
  try {
    if (image) {
      await uploadBytes(userRef, image).then((snapshot) => {
        getDownloadURL(userRef).then((url) => {
          updateDoc(userDoc, {
            photoURL: url,
          }).then(() => {
            console.log(url);
            updateProfile(auth.currentUser!, {
              photoURL: url,
            });
          });
        });
      });
    }
    if (picURL) {
      await updateDoc(userDoc, {
        photoURL: picURL,
      }).then(() => {
        updateProfile(auth.currentUser!, {
          photoURL: picURL,
        });
      });
    }
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
}
