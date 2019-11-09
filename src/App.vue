<template>
  <vue100vh id="app" :css="{ height: '100rvh' }">
    <app-header />
    <main>
      <router-view />
    </main>
    <bottom-navigation />
  </vue100vh>
</template>

<script lang="ts">
import Vue from 'vue'
import vue100vh from 'vue-100vh'

import BottomNavigation from '@/components/BottomNavigation.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    BottomNavigation,
    AppHeader,
    vue100vh,
  },
}
</script>

<style scoped>
#app {
  background-color: var(--light-rest);
  height: 100vh;
  display: grid;
  grid-template-rows: 104px 1fr 58px;
}
</style>
