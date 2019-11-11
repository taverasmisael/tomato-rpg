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
  position: relative;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: all 350ms ease-in;
}

.nav-item::before {
  background: currentColor;
  border-radius: 4px;
  content: '';
  display: block;
  height: 2px;
  left: 0;
  position: absolute;
  top: -1px;
  transition: all 300ms ease;
  transform-origin: center;
  transform: scaleX(0);
  width: 100%;
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
  height: 100%;
}
.nav-item.is-active::before {
  transform: scaleX(1);
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
