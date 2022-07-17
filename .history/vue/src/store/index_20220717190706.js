import { createStore } from "vuex";

const store = createStore ({

    state: {
        user: {
            data: {},
            token: 123,
          }
    },
    getters:{},
    actions:{},
    mutations:{},
    modules:{
        logout: (state) => {
            state.user.token = {};
            state.user.data = {};
            
          },
    }
})

export default store;