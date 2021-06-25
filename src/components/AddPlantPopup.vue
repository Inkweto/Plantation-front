<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" text slot="activator" class="success">Add plant</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h3>Add a new plant</h3>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Name" v-model="name"></v-text-field>
                    <v-text-field label="Height" v-model="height"></v-text-field>
                    <v-text-field label="Diameter" v-model="diameter"></v-text-field>
                    <v-btn test class="success mx-0 mt-3" v-on:click='addPlant'>Add plant</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
 
<script>
import Vue from 'vue'

export default {
  data() {
      return {
          name: '',
          height: '',
          diameter: '',
      }
  },
  methods: {
        async addPlant() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json",
                           "Access-Control-Allow-Credentials": "true",
                           "Access-Control-Allow-Origin": "http://localhost:8080/plants/" },
                credentials: "include",
                body: JSON.stringify({ 
                    "name": this.name,
                    "ownerId": {
                        "login": this.$store.getters.StateUser.login,
                        "id": this.$store.getters.StateUser.id
                    },
                    "height": this.height,
                    "diameter": this.diameter
                })
            };

            this.result = await fetch(Vue.prototype.$api_url + "/plants", requestOptions);
            this.reservationResponse = await this.result.json()

        },
  }
}
</script>
