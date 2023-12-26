import api from "../axios.jsx";

const useUsersApi = () => {
  const login = async (data: any) => api.post("/user/login", { ...data });
  const register = async (data: any) => api.post("/user/register", { ...data });

  return { login, register };
};

export default useUsersApi;
