<template>
  <router-link
    :to="to"
    class="nav-item t--small"
    exact-active-class="is-active"
  >
    <slot></slot>
    <span class="text">{{ text }}</span>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NavItem extends Vue {
  @Prop() private to!: string
  @Prop() private text!: string
}
</script>

<style scoped>
.nav-item {
  display: block;
  padding: 0.25em 0.5em;
  text-decoration: none;
}
.nav-item:hover,
.nav-item:active,
.nav-item:visited,
.nav-item:focus {
  text-decoration: none;
}

.nav-item .text {
  display: none;
}

.nav-item >>> .icon {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  max-width: 20px;
}
.nav-item >>> .icon .cls-1 {
  fill: rgba(0, 0, 0, 0.35);
  stroke: transparent;
}

.nav-item.is-active {
  padding-left: 2em;
  padding-right: 2em;
}

.nav-item.is-active .text {
  display: block;
  margin-top: 4px;
}
.nav-item.is-active >>> .icon {
  max-width: 24px;
}
.nav-item.is-active >>> .icon .cls-1 {
  fill: #fff;
  stroke: transparent;
}
</style>
