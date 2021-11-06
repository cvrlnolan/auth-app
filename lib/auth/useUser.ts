import { useEffect, useState } from "react";
import { initFirebase } from "@/lib/firebaseInit";
import { getAuth } from "firebase/auth";
import { mapUserData } from "@/lib/auth/mapUser";
import {
  getUserFromCookie,
  setUserCookie,
  removeUserCookie,
} from "@/lib/auth/userCookies";
import { useRouter } from "next/router";

initFirebase();

const useUser = () => {
  const [user, setUser] = useState<any>();
  const router = useRouter();
  const auth = getAuth();

  const logout = async () => {
    // return auth
    //   .signOut()
    //   .then(() => {
    //     removeUserCookie();
    //   })
    //   .catch((e: any) => {
    //     console.log(e.message);
    //   });
    try {
      await auth.signOut();
      removeUserCookie();
      router.push("/");
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user);
        setUserCookie(userData);
        setUser(userData);
        router.replace("/profile");
      } else {
        removeUserCookie();
      }
    });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      router.replace("/");
    } else {
      setUser(userFromCookie);
      router.replace("/profile");
    }
    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout };
};

export { useUser };
