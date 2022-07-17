import { createStore } from "vuex";

const store = createStore ({

    state: {
        user: {
            data: {},
            token: null,
          }
    },
    getters:{},
    actions:{},
    mutations:{},
    modules:{
        logout: (state) => {
            state.user.data = {};
            state.user.token = {};
            
          },
    }
})

export default store;