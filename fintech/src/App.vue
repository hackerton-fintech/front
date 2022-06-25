<template>
  <div id="app" style=" height: inherit;">
    <header style="height:20%; background-color: rgb(41,137,134);">
      <span style="color:rgba(255,255,255,0.8); font-size:1.5rem; font:bold;">CashCow</span>
    </header>
    <section style="height:80%;">
      <HomeView :user="user"></HomeView>
    </section>
    <!-- <div class="app-home-btn">
      <router-link :to="{ name: 'login' }" v-if="!isLogin">Login</router-link>
      <button v-else @click="logOut"
        style="border:none; background-color: gold; font-size: 1rem; outline:0;">LogOut</button>
      <router-link to="/">Join</router-link>
    </div> -->
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
// import {Plotly} from 'plotly';
export default {
  name: "AppVue",
  data() {
    return {
      user:{
        name: "펩시맨",
        characteristic: "공격투자성향",
      }
    }
  },
  watch: {

  },
  methods: {
    logOut() {
      window.alert("로그아웃 되었습니다.")
      this.isLogin = false;
    },
    login(val) {
      console.log('parent login');
      this.isLogin = val;
      this.$router.push("/");
    }
  },
  components: {
    HomeView
},
  created() {
  }
};

</script>


<style scoped>
.v-application * *{
  font-family: 'GmarketSans', sans-serif !important;
}
@font-face {
    font-family: 'GmarketSans';
    font-weight: 700; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFBold.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFBold.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'GmarketSans';
    font-weight: 500; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFMedium.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFMedium.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'GmarketSans';
    font-weight: 300; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFLight.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFLight.woff) format('woff');
    font-display: swap;
}
</style>
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
