const devUrl = "http://localhost:4000/";
const prodUrl = "https://markhbackend.vercel.app/";

export const Base_Url = prodUrl;

export const AppRoutes = {
    register: Base_Url + "auth/register",
    login: Base_Url + "auth/login"
}