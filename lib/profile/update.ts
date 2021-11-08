import { initFirebase, db } from "@/lib/firebaseInit";
import { doc, updateDoc } from "firebase/firestore";
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePassword,
} from "firebase/auth";

initFirebase();

const auth = getAuth();

export default async function index(user: any, data: any) {
  const userDoc = doc(db, "users", user.uid);
  try {
    await updateDoc(userDoc, {
      name: data.name !== "" ? data.name : user.name,
      bio: data.bio !== "" ? data.bio : user.bio,
      phone: data.phoneNumber !== "" ? data.phoneNumber : user.phone,
    }).then(() => {
      updateProfile(auth.currentUser!, {
        displayName: data.name !== "" ? data.name : user.name,
      });
    });
    if (data.email !== "") {
      await updateEmail(auth.currentUser!, data.email).then(() => {
        updateDoc(userDoc, {
          email: data.email,
        });
      });
    }
    if (data.password !== "") {
      await updatePassword(auth.currentUser!, data.password);
    }
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
}
