<template>
  <div style="display: flex">
    <div></div>
    <div class="recommand-btn">
      <div>
        <router-link to="/stock">주식 | </router-link>
      
        <router-link to="/bond">채권 | </router-link>
      
        <router-link to="/deposit">예금</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    
  },
};
</script>

<style>
.recommand-btn * {
  text-decoration: none;
  color: black;
}
</style>
