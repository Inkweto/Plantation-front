<template>
  <v-app>
    <template v-if="!$route.path.includes('login')">
      <NavBar />  
    </template>

    <v-main>
      <keep-alive :include="['Login']">
            <router-view></router-view>
         </keep-alive>
    </v-main>

    <template v-if="!$route.path.includes('login')">
      <Footer />
    </template>

  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
  export default {
    name: 'App',

    components: {
      NavBar,
      Footer
    },

    data() {
      return {
        username: '',
        user: [],
        result: '',
      }
  },
  created() {

  },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isAuthenticated },
      getUsername : function(){ return this.$store.getters.StateUser.username }
  },
  methods: {
    async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/login')
    }
  }
  };
</script>
