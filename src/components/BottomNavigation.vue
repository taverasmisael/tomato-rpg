<template>
  <nav class="container">
    <nav-item to="/" text="Timer">
      <TimerIcon class="icon" />
    </nav-item>
    <nav-item to="/reports" text="Reports">
      <ReportIcon class="icon" />
    </nav-item>
    <nav-item to="/settings" text="Settings">
      <SettingsIcon class="icon" />
    </nav-item>
    <nav-item to="/profile" text="Settings">
      <AccountIcon class="icon" />
    </nav-item>
  </nav>
</template>

<script lang="ts">
import TimerIcon from '../assets/icons/timer-icon.svg'
import ReportIcon from '../assets/icons/report-icon.svg'
import SettingsIcon from '../assets/icons/settings-icon.svg'
import AccountIcon from '../assets/icons/account-icon.svg'
import NavItem from './NavItem.vue'

export default {
  components: { NavItem, TimerIcon, ReportIcon, SettingsIcon, AccountIcon },
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
</style>
