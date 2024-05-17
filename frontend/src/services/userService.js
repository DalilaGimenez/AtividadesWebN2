import { api, requestConfig } from "../utils/config";

// Get user profile details
const profile = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/users", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res[0]; // Simulando que o primeiro usuário é o usuário logado
  } catch (error) {
    console.log(error);
  }
};

// Update user profile details
const updateProfile = async (data, id) => {
  const config = requestConfig("PUT", data);

  try {
    const res = await fetch(api + "/users/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get user details by ID
const getUserDetails = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/users/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  profile,
  updateProfile,
  getUserDetails,
};

export default userService;