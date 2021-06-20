<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Plantation
        </h1>

        <p class="subheading font-weight-regular">
          Project is still in progress!
          <br>Watch us 
          <a
            href="https://github.com/Inkweto/Plantation-front"
            target="_blank"
          >here</a>
        </p>

        <v-btn
          v-on:click='fetchDemoData'
          target="_blank"
          text
        >
        get some data from back-end
        </v-btn>
        <hr>
        <p>
            <i>{{result}}</i>
        </p>
        <hr>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: 'HelloWorld',
    methods: {
      async fetchDemoData() {
        this.result = await fetch("http://localhost:8080", {
          headers: {
            Accept: "application/json"
          }
        });
        this.result = await this.result.json();
      }
    },
    data: () => ({
      result: "",
    })
  }
</script>
