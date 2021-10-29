import cookies from "js-cookie";

type UserData = {
  id: string;
  email: string | null;
  name: string | null;
  photoURL: string | null;
};

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return;
  }
  return JSON.parse(JSON.stringify(cookie));
};

export const setUserCookie = (user: UserData) => {
  cookies.set("auth", user, {
    expires: 1 / 24,
    sameSite: "lax",
    secure: true,
  });
};

export const removeUserCookie = () => {
  cookies.remove("auth");
};
