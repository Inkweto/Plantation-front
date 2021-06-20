import Vue from 'vue'

const state = {
    user: null,
};
const getters = {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
};
const actions = {
    async LogIn({commit}, User) {
        //localhost:8080/login?login=Adam&password=admin

        var result = await fetch(Vue.prototype.$api_url + "/login/?" + 
                                    "login=" + User.get('username') +
                                    "&password=" + User.get('password'), {
            headers: {
                Accept: "application/json"
            }
            });  
        
        const resp = await result.json();    
        const info = await resp;

        if(result.status == 200) {
            await commit('setUser', info)         
        }

        //await commit('setUser', User.get('username'))
    },

    async LogOut({commit}){
        let user = null
        commit('LogOut', user)
    }
};
const mutations = {
    setUser(state, username){
        state.user = username
    },
    LogOut(state){
        state.user = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};