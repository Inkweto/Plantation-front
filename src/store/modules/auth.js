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
        var result = await fetch(Vue.prototype.$api_url + "/login/?" + 
                                    "login=" + User.get('username') +
                                    "&password=" + User.get('password'), {
            method: 'POST',
            headers: {
                Accept: "application/json"
            }
        });  
        
        const resp = await result.json();  
        console.log(resp);
        if(result.status == 200) {

            await commit('setUser', resp)         
        }
    },

    async LogOut({commit}){
        let user = null
        commit('LogOut', user)
    }
};
const mutations = {
    setUser(state, user){
        state.user = user
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