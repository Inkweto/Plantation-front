<template>
  <div class="plants">
    <v-container class="my-5">
      
      <v-row>
        <h1 class="display-1 mb-3 heading dark--text">
          Plants
        </h1>
      </v-row>
      <v-flex class="mt-4 mb-3">
        <AddPlantPopup />
      </v-flex>

      <v-layout row wrap align-content-center>
        <v-flex xs6 sm4 md3 lg2 v-for="plant in plants1" :key="plant.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img 
                :src="plant.photo_path"
                height="200"
                width="200">
              </v-img>
            </v-responsive>
            <v-card-text>
              <div class="subheading">Name: {{ plant.name }}</div>
              <div class="grey--text">Height: {{ plant.height }}</div>
              <div class="grey--text">Diameter: {{ plant.diameter }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
import Vue from 'vue'
import AddPlantPopup from './AddPlantPopup'

export default {
  components: { AddPlantPopup },
  data() {
    return {
      plants1: [
        { name: 'Orfea Logini', height: '15', diameter: '20', photo_path: 'sample2.jpg' },
        { name: 'Paprotka', height: '50', diameter: '40', photo_path: 'sample1.jpg' },
        { name: 'Truskawki', height: '5', diameter: '2', photo_path: 'sample1.jpg' },
        { name: 'Jemio?a', height: '5', diameter: '2', photo_path: 'sample1.jpg' },
        { name: 'Bocian', height: '5', diameter: '2', photo_path: 'sample1.jpg' },
        { name: 'Kaktusik', height: '5', diameter: '2', photo_path: 'sample1.jpg' },
        { name: 'Pomidorki', height: '10', diameter: '4', photo_path: 'sample2.jpg' },
      ],
      plants: [],
      result: ''
    }
  },
  created() {
        this.initialize()
    },
  methods: {
    async initialize() {
      this.result = await fetch(Vue.prototype.$api_url + "/plants/", {
      headers: {
        Accept: "application/json"
      }
      });
      this.plants = await this.result.json();
    }
  }
}
</script>