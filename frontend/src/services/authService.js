import { api, requestConfig } from "../utils/config";

// Register an user
const register = async (data) => {
  // Simular resposta de registro
  const fakeUser = {
    id: Math.random().toString(36).substr(2, 9),
    username: data.username,
    email: data.email,
    password: data.password,
    _id: Math.random().toString(36).substr(2, 9),
  };

  // Armazenar no localStorage para simular persistência
  localStorage.setItem("user", JSON.stringify(fakeUser));
  return fakeUser;
};

// Sign in a user
const login = async (data) => {
  // Simular resposta de login
  const fakeUser = {
    id: Math.random().toString(36).substr(2, 9),
    username: "fake_user",
    email: data.email,
    password: data.password,
    _id: Math.random().toString(36).substr(2, 9),
  };

  // Armazenar no localStorage para simular persistência
  localStorage.setItem("user", JSON.stringify(fakeUser));
  return fakeUser;
};

// Logout an user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;