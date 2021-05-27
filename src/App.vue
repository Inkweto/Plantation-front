<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <v-btn
        href="http://localhost:8080/"
        text
      >
        <v-img
          :src="require('./assets/logo.png')"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />
        <span class="mr-2">Plantation</span>
      </v-btn>

      <v-btn
        href="http://localhost:8080/plants"
        text
      >
        <span class="mr-2">Plants</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Inkweto/Plantation-front"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer 
      app
      color="green"
      dark>
      
      <v-icon>mdi-copyright</v-icon> Inkweto
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
    }),
  };
</script>
