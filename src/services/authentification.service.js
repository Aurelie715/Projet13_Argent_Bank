import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

const signIn = async (email, password, rememberme) => {
  const storage = rememberme ? localStorage : sessionStorage;
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      storage.setItem("token", response.data.body.token);
    });
};

export { signIn };
