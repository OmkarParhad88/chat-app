import Env from "./env";

export const BASE_URL = Env.BACKEND_URL;
export const API_URL = BASE_URL + "/api";
export const LOGIN_URL = API_URL + "/auth/login";
export const GROUP_CHAT_URL = API_URL + "/group-chat";
export const GROUP_USER_URL = API_URL + "/group-user";
export const CHAT_URL = API_URL + "/chat";
