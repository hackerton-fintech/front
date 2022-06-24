<template>
  <div style="display:flex;">
    <div>
      
    </div>
    <div class="recommand-btn">
      <div>
        <router-link to="">주식</router-link>
      </div>
      <div>
        <router-link to="">채권</router-link>
      </div>
      <div>
        <router-link to="">예금</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style>
  .recommand-btn *{
    text-decoration: none;
    color: black;
  }
</style>