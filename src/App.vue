<template>
  <vue100vh id="app" :css="{ height: '100rvh' }">
    <main>
      <router-view />
    </main>
    <bottom-navigation></bottom-navigation>
  </vue100vh>
</template>

<script lang="ts">
import Vue from 'vue'
import vue100vh from 'vue-100vh'

import BottomNavigation from '@/components/BottomNavigation.vue'

export default {
  name: 'App',
  components: {
    BottomNavigation,
    vue100vh,
  },
}
</script>

<style scoped>
#app {
  background-color: var(--light-rest);
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}

#app > main {
  flex: 1;
}
</style>
