import { User } from "@firebase/auth";

export const mapUserData = (user: User) => {
  const { uid, email, photoURL, displayName } = user;
  return {
    id: uid,
    email,
    name: displayName,
    photoURL,
  };
};
