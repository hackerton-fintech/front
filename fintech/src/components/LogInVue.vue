<template>

    <div>
        <div style="background-color: gold; display:flex; flex-direction: column; justify-content: center; align-items: center; margin: 0 auto; width:50%;">
            <input type="text" placeholder="id" v-model="id" />
            <input type="password" placeholder="password" v-model="pw" />
            <button style="border:1px solid gray; background-color: gold;" @click="login">로그인</button>
        </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
    name: "LogInVue",
    data() {
        return {
            id: "",
            pw: ""
        }
    },
    methods:{
        login(){
            // axios.post()
            // .then(res=>{
            //     res;
            // })
            // .then(res=>{
            //     res;
            //     this.$emit('login');
            // })
            console.log('child login')
            this.$emit('login',true);
        }
    }

}
</script>

<style></style>
