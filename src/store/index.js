import { createStore } from "vuex";
import pizza from "./pizza";

export const store = createStore({
    modules: {
        pizza,
    }
})