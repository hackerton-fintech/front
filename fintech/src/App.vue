<template>
  <div id="app" style="background-color: gold; height: 844px;">
    <div class="app-home-btn">
      <router-link :to="{name: 'login'}" v-if="!isLogin">Login</router-link>
      <button v-else @click="logOut" style="border:none; background-color: gold; font-size: 1rem; outline:0;">LogOut</button>
      <router-link :to="{name: join}">Join</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import HomeView from '@/views/HomeView.vue'

export default {
  name: "AppVue",
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    logOut() {
      window.alert("로그아웃 되었습니다.")
      this.isLogin = false;
    }
  },
  components: {
  },
};
</script>

<style>
.app-home-btn a {
  text-decoration: none;
  color: black;
  margin: 3px;
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
