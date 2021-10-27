import { initFirebase, db } from "@/lib/firebaseInit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
      });
    }
    if (provider === "emailPassword" && credentials) {
    }
  } catch (e: any) {
    console.log(e.message);
  }
}
