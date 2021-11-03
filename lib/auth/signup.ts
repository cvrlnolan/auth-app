import { initFirebase, db } from "@/lib/firebaseInit";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { mapUserData } from "@/lib/auth/mapUser";
import { setUserCookie } from "@/lib/auth/userCookies";

initFirebase();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

type Credentials = {
  email: string;
  password: string;
};

export default async function index(
  provider: "emailPassword" | "google" | "facebook" | "twitter" | "github",
  credentials?: Credentials
) {
  try {
    if (provider === "google") {
      await signInWithPopup(auth, googleProvider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        const user = result?.user;
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          bio: "",
          phone: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          token,
        });
        const userData = mapUserData(user);
        setUserCookie(userData);
      });
    }
    if (provider === "facebook") {
      await signInWithPopup(auth, facebookProvider).then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        const user = result?.user;
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          bio: "",
          phone: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          token,
        });
        const userData = mapUserData(user);
        setUserCookie(userData);
      });
    }
    if (provider === "twitter") {
      await signInWithPopup(auth, twitterProvider).then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        const user = result?.user;
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          bio: "",
          phone: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          token,
        });
        const userData = mapUserData(user);
        setUserCookie(userData);
      });
    }
    if (provider === "github") {
      await signInWithPopup(auth, githubProvider).then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        const user = result?.user;
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          bio: "",
          phone: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          token,
        });
        const userData = mapUserData(user);
        setUserCookie(userData);
      });
    }
    if (provider === "emailPassword" && credentials) {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      ).then((result) => {
        const user = result.user;
        // No token generated for email & password signup. Inconsistency must be seen through
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          bio: "",
          phone: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
        });
      });
    }
  } catch (e: any) {
    console.log(e.message);
  }
}
