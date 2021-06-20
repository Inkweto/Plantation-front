<template>
  <div id="nav">
      <v-app-bar
        app
        color="green"
        dark
      >
        <v-btn
          href="http://localhost:8000/"
          text
        >
          <v-img
            :src="require('../assets/logo.png')"
            class="shrink mr-2"
            contain
            transition="scale-transition"
            width="40"
          />
          <span class="mr-2">Plantation</span>
        </v-btn>

        <v-btn
          href="http://localhost:8000/plants"
          text
        >
          <span class="mr-2">Plants</span>
        </v-btn>

        <v-spacer></v-spacer>

        <span v-if="isLoggedIn">
          <v-icon>mdi-account</v-icon>
          
          <span text class="mr-2 ml-2">{{getUsername}}</span>
          
          <v-btn text @click="logout">
            <span class="mr-2">Logout</span>  
          </v-btn>
        </span>
        <span v-else>
          not logged
        </span>
      </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

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
      getUsername : function(){ return this.$store.getters.StateUser.name }
  },
  methods: {
    async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/login')
    }
  }
  };
</script>
