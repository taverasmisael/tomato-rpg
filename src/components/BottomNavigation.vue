<template>
  <nav class="container">
    <router-link
      to="/"
      class="nav-item t--small"
      exact-active-class="is-active"
    >
      <TimerIcon class="icon" />
      <span class="text">Timer</span>
    </router-link>
    <router-link
      to="/reports"
      class="nav-item t--small"
      exact-active-class="is-active"
    >
      <ReportIcon class="icon" />
      <span class="text">Reports</span>
    </router-link>
    <router-link
      to="/settings"
      class="nav-item t--small"
      exact-active-class="is-active"
    >
      <SettingsIcon class="icon" />
      <span class="text">Settings</span>
    </router-link>
    <router-link
      to="/profile"
      class="nav-item t--small"
      exact-active-class="is-active"
    >
      <AccountIcon class="icon" />
      <span class="text">Settings</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import TimerIcon from '../assets/icons/timer-icon.svg'
import ReportIcon from '../assets/icons/report-icon.svg'
import SettingsIcon from '../assets/icons/settings-icon.svg'
import AccountIcon from '../assets/icons/account-icon.svg'

export default {
  components: { TimerIcon, ReportIcon, SettingsIcon, AccountIcon },
}
</script>

<style scoped>
.container {
  align-items: center;
  background-color: var(--dark-rest);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(4, 1fr);
  height: 58px;
  padding: 0 32px;
}

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

.nav-item .icon {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  max-width: 20px;
}
.nav-item .icon .cls-1 {
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
.nav-item.is-active .icon {
  max-width: 24px;
}
.nav-item.is-active .icon .cls-1 {
  fill: #fff;
  stroke: transparent;
}
</style>
