import api from "./api";

// Save & remove token helper
export const saveToken = (token) => {
  debugger;
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

// ----------------------------
// AUTH SERVICE
// ----------------------------

// SIGNUP
export const signup = async (payload) => {
  // payload = { name, email, password }
  const { data } = await api.post("/api/v1/auth/signup", payload);
  return data;
};

// LOGIN
export const login = async (payload) => {
  const { data } = await api.post("/api/v1/auth/login", payload);

  // Save token from backend
  saveToken(data.token);

  return data.user;
};

// LOGOUT
export const logout = () => {
  removeToken();
};

// FETCH CURRENT USER
export const fetchUser = async () => {
  const { data } = await api.get("/api/v1/user/showMe");
  return data.user;
};

// UPDATE USER PROFILE
export const updateProfile = async (payload) => {
  const { data } = await api.put("/api/v1/user/updateUser", payload);
  return data.user;
};

// CHANGE PASSWORD
export const changePassword = async (payload) => {
  const { data } = await api.put("/api/v1/user/updatePassword", payload);
  return data.message;
};
