import axios from 'axios';

const BASE_URL = 'https://s6-1cep.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// AUTH
export const login = (email: string, password: string) =>
  api.post('/login', { email, password });

export const register = (email: string, password: string) =>
  api.post('/register', { email, password });

// USERS
export const getUsers = () => api.get('/users/');
export const getUser = (userId: string) => api.get(`/users/${userId}`);
export const createUser = (data: object) => api.post('/users/', data);
export const updateUser = (userId: string, data: object) => api.put(`/users/${userId}`, data);
export const deleteUser = (userId: string) => api.delete(`/users/${userId}`);

// JOB OFFERS
export const getJobOffers = () => api.get('/job-offers/');
export const getJobOffer = (offerId: string) => api.get(`/job-offers/${offerId}`);
export const createJobOffer = (data: object) => api.post('/job-offers/', data);
export const updateJobOffer = (offerId: string, data: object) => api.put(`/job-offers/${offerId}`, data);
export const deleteJobOffer = (offerId: string) => api.delete(`/job-offers/${offerId}`);

// APPLICATIONS
export const getApplications = () => api.get('/applications/');
export const getApplication = (appId: string) => api.get(`/applications/${appId}`);
export const getApplicationsByUser = (userId: string) => api.get(`/applications/user/${userId}`);
export const getApplicationsByOffer = (offerId: string) => api.get(`/applications/offer/${offerId}`);
export const createApplication = (data: object) => api.post('/applications/', data);
export const deleteApplication = (appId: string) => api.delete(`/applications/${appId}`);

export const generateApplicationsFromMatches = (data: object) =>
  api.post('/applications/generate-from-matches', data);

// CVS
export const uploadCV = (formData: FormData) =>
  api.post('/cvs/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const getCVs = () => api.get('/cvs/');
export const downloadCV = (cvId: string) =>
  api.get(`/cvs/download/${cvId}`, { responseType: 'blob' });

// MATCHING
export const runMatch = (data: object) => api.post('/match/run', data);
export const getMatchResults = () => api.get('/match/results');

export const sayHello = () => {
  return "Hello from shared API!";
};

export default api;
