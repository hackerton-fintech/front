<template>
  <div id="app">
    <router-link class="app-home-btn" to="/">캐시카우</router-link>
    <router-view />
  </div>
</template>

<script>
// import HomeView from '@/views/HomeView.vue'

export default {
  components: {
    // HomeView,
  },
};
</script>

<style>
.recommand-btn * {
  text-decoration: none;
  color: black;
}
.app-home-btn {
  position: fixed;
  top: 30px;
  right: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
