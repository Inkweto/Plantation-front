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
         
            
            <v-btn
              class='mr-5'
              x-large
              color="green"
              dark
              href="http://localhost:8000/plants"
            >
              Plant collection
            </v-btn>

            <v-btn
              x-large
              color="green"
              dark
              href="http://localhost:8000/notices"
            >
              Notice board
            </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
    })
  }
</script>
