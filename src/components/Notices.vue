<template>
  <div class="notices">
    <v-container class="my-5">
      
      <v-row>
        <h1 class="display-1 mb-3 heading dark--text">
          Notices
        </h1>
      </v-row>
      <v-flex class="mt-4 mb-3">
      </v-flex>

      <v-layout row wrap align-content-center>
        <v-flex xs6 sm4 md3 lg2 v-for="notice in notices1" :key="notice.name">
          <v-card flat class="text-xs-center ma-3">
            <v-card-title>
                {{ notice.name }}
            </v-card-title>
            <v-card-text>
              <div class="subheading">Plant: {{ notice.plantId.name }}</div>
              <div class="subheading">User: {{ notice.userId.login }}</div>
              <div class="grey--text">{{ notice.noticeText }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      notices1: [
        {userId:{login: "user"},plantId:{name: "kaktus"},name:"Notice title1",noticeText:"Notice description"},
        {userId:{login: "user"},plantId:{name: "bazie"},name:"Notice title2",noticeText:"Notice description"},
        {userId:{login: "user"},plantId:{name: "pieczarka"},name:"Notice title3",noticeText:"Notice description"},
        {userId:{login: "user"},plantId:{name: "żywopłot"},name:"Notice title4",noticeText:"Notice description"},
        {userId:{login: "user"},plantId:{name: "muchomor"},name:"Notice title5",noticeText:"Notice description"},
        {userId:{login: "user"},plantId:{name: "rdest"},name:"Notice title6",noticeText:"Notice description"},
        {userId:{login: "user"},plantId:{name: "róża"},name:"Notice title7",noticeText:"Notice description"},
      ],
      notices: [],
      result: ''
    }
  },
  created() {
        this.initialize()
    },
  methods: {
    async initialize() {
      this.result = await fetch(Vue.prototype.$api_url + "/notices", {
      headers: {
        Accept: "application/json"
      }
      });
      this.notices = await this.result.json();
    }
  }
}
</script>