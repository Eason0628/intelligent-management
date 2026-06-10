import { TOKEN_KEY } from "@/js/constant";
export default {
    namespaced: true,
    state: {
        token: localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : "",
        lanauage: "zh_CN",
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            if (token) localStorage.setItem(TOKEN_KEY, token);
            else {
                localStorage.removeItem(TOKEN_KEY);
                location.href = "/login";
            }
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token);
        }
    },
    getters: {
        token(state) {
            return state.token;
        }
    }
}