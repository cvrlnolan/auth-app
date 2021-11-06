import { initFirebase } from "@/lib/firebaseInit";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { mapUserData } from "@/lib/auth/mapUser";
import { setUserCookie } from "@/lib/auth/userCookies";

initFirebase();

const auth = getAuth();

type Credentials = {
  email: string;
  password: string;
};

export default async function index(credentials: Credentials) {
  try {
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    ).then((result) => {
      const user = result.user;
      const userData = mapUserData(user);
      setUserCookie(userData);
    });
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
}
