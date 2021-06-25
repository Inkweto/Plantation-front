import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store';
import axios from 'axios';
import VueCookies from 'vue-cookies';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
  
        originalRequest._retry = true;
        store.dispatch('LogOut')
        return router.push('/login')
    }
  }
})

Vue.config.productionTip = false;
Vue.prototype.$api_url = "http://localhost:8080";

Vue.use(VueCookies);

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
