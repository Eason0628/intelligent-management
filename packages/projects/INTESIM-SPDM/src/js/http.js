import { TOKEN_KEY, THING_CODE } from "@/js/constant";
import axios from "axios";
import router from "@/js/router";

const service = axios.create({
    baseURL: "/api",
    timeout: 100000,
});
service.defaults.headers["Content-Type"] = "application/json; charset=utf-8";
service.defaults.headers["intesim_thing_code"] = THING_CODE;

service.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_KEY] = localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : "";
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        if (response.headers[TOKEN_KEY]) store.commit("user/setToken", response.headers[TOKEN_KEY]);
        return response.data;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                store.commit("user/setToken", "");
                router.push({
                    path: "/login",
                    query: {
                        redirect: router.currentRoute.value.path !== "/login" ? router.currentRoute.value.path : undefined,
                    },
                });
            } else if (error.response.status === 404) {
                message.error("Not Found!");
            } else message.error(error.response.data.message);
        }
        return Promise.reject(error);
    }
)
export default service;