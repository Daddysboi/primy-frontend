import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(USER_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it

    // error.response.data.error !== "Ivalid credentials".... login errors are not intercepted
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data.error === "access_token"
    ) {
      originalRequest._retry = true;

      // try {
      //   const refreshToken = localStorage.getItem('refreshToken');
      //   const response = await axios.post('/api/refresh-token', { refreshToken });
      //   const { token } = response.data;

      //   localStorage.setItem('token', token);

      //   // Retry the original request with the new token
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return axios(originalRequest);
      // } catch (error) {
      //   // Handle refresh token error or redirect to login
      // }

      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
