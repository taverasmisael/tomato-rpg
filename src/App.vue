<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Timer</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/reports">Reports</router-link>|
      <router-link to="/settings">Settings</router-link>|
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.5em;
  margin: 0.25em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
