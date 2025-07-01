import axios from "axios";

const BASE_URL = "https://s6-1cep.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  // REMOVE withCredentials because RN doesn’t handle cookies natively
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// ───── AUTH
export const login = (email: string, password: string) =>
  api.post("/login", { email, password });

  export const register = (data: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: string;
  }) => api.post("/register", data);

export const googleLogin = () => api.get("/auth/google/login");

export const googleCallback = (code: string) =>
  api.get(`/auth/google/callback?code=${encodeURIComponent(code)}`);

// ───── USERS
export const getUsers = () => api.get("/users/");
export const getUser = (id: string) => api.get(`/users/${id}`);
export const createUser = (data: any) => api.post("/users/", data);
export const updateUser = (id: string, data: any) => api.put(`/users/${id}`, data);
export const deleteUser = (id: string) => api.delete(`/users/${id}`);

// ───── JOB OFFERS
export const getJobOffers = () => api.get("/job-offers/");
export const getJobOffer = (id: string) => api.get(`/job-offers/${id}`);
export const createJobOffer = (data: any) => api.post("/job-offers/", data);
export const updateJobOffer = (id: string, data: any) =>
  api.put(`/job-offers/${id}`, data);
export const deleteJobOffer = (id: string) => api.delete(`/job-offers/${id}`);

// ───── APPLICATIONS
export const getApplications = () => api.get("/applications/");
export const getApplication = (id: string) => api.get(`/applications/${id}`);
export const getApplicationsByUser = (uid: string) =>
  api.get(`/applications/user/${uid}`);
export const getApplicationsByOffer = (oid: string) =>
  api.get(`/applications/offer/${oid}`);
export const createApplication = (data: any) => api.post("/applications/", data);
export const deleteApplication = (id: string) => api.delete(`/applications/${id}`);
export const generateApplicationsFromMatches = (data: any) =>
  api.post("/applications/generate-from-matches", data);

// ───── CVS
export const uploadCV = (formData: FormData) =>
  api.post("/cvs/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getCVs = () => api.get("/cvs/");
export const downloadCV = (id: string) =>
  api.get(`/cvs/download/${id}`, { responseType: "blob" });

// ───── MATCHING
export const runMatch = (data: any) => api.post("/match/run", data);
export const getMatchResults = () => api.get("/match/results");

export const sayHello = () => "Hello from shared API!";

export default api;
