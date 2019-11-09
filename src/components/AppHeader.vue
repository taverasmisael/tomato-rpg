<template>
  <header><AppLogo class="logo" /></header>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

import AppLogo from '@/assets/icons/logo.svg'

@Component({ components: { AppLogo } })
export default class AppHeader extends Vue {}
</script>
<style scoped>
header {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 32px 8px;
}

header .logo {
  object-fit: contain;
  height: auto;
  width: 208px;
}
</style>
