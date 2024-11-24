import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export interface AuthResponse {
    user: { id: string; email: string };
    token: string;
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
    const { data } = await API.post("/auth/login", { email, password });
    return data;
};

export const signup = (data) => API.post("/auth/signup", data);

export const fetchProjects = () => API.get("/projects");