const devUrl = "http://localhost:4000/";
const prodUrl = "";

export const Base_Url = devUrl;

export const AppRoutes = {
    register: Base_Url + "auth/register",
    login: Base_Url + "auth/login"
}