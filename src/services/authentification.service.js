import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

const signIn = async (email, password, rememberme) => {
  const storage = rememberme ? localStorage : sessionStorage;
  const response = await axios.post(API_URL + "login", { email, password });

  storage.setItem("token", response.data.body.token);

  return await getProfileInfo();
};

//info de l'utilisateur courant
const getProfileInfo = async () => {
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const profileResponse = await axios.post(
    API_URL + "profile",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return profileResponse.data.body;
};

const signOut = async () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

const isLoggedIn = () => {
  return !!(sessionStorage.getItem("token") || localStorage.getItem("token"));
};

export { signIn, getProfileInfo, signOut, isLoggedIn };
