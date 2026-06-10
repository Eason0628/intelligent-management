import Vuex from "vuex";
import user from "./module/user";
export const store = new Vuex.Store({
    modules: {
        user
    }
});
