<template>
  <div>
    <div
      style="
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 50%;
      "
    >
      <input placeholder="id" v-model="id" />
      <input type="password" placeholder="password" v-model="pw" />
      <button style="border: none; outline: 0" @click="login">로그인</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogInVue",
  date() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    login() {
      axios
        .post()
        .then((res) => {
          res;
        })
        .then((res) => {
          res;
          this.$emit();
        });
    },
  },
};
</script>

<style></style>
