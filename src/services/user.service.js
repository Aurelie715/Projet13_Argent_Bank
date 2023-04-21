import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

const updateProfile = async (firstName, lastName) => {
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return axios.put(
    API_URL + "profile",
    { firstName, lastName },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export { updateProfile };
