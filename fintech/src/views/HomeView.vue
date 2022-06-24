<template>
  <div style="display:flex; height:100%; flex-direction: column; background-color:gold">
    <div style="height:100px;"></div>
    <div style="background-color: white;  border-radius:8px; width:80%; margin:0 auto;">
      <div style="font-size:20px;">
        xnwk qnstjr
      </div>
      <div>user name</div>
      <div>wktks</div>
      <animated-number :value="100000000" :formatValue="formatMoney" :duration="1500" />
    </div>

    
    <div class="recommand-btn" style="width:100%; margin-top: 30px; background-color: white;">
      <div v-for="item in items" :key="item.id">

        <div>
          <router-link :to="{ name: item.link }">
            <div class="bar-graph">
                <div :data-width="`${item.percent}`" style="">
                  {{ item.name }}
                  <span>
                    <animated-number :value="`${item.percent}`" :formatValue="format" :duration="1500" />
                  </span>
                </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AnimatedNumber from "animated-number-vue";
export default {
  name: 'HomeView',
  data() {
    return {
      items: [],
    }
  },
  components: {
    AnimatedNumber
  },
  watch: {
  },
  methods: {
    formatMoney(value){
      return `${value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    },
    format(value) {
      return `${value.toFixed(0)}`;
    }
  },
  created() {
    axios.get('http://localhost:8888/info')
      .then((res) => {
        this.items = res.data;
      })
    this.items = [{ link: "a", name: "a", percent: "30" }, { link: "b", name: "b", percent: "70" }];

  },
  mounted() {
    document.querySelectorAll(".bar-graph div").forEach(el => {
      el.setAttribute("style", "width:" + el.getAttribute("data-width") +
        "%;")
      
    })
  },
}
</script>

<style>
.tran-enter-to {
  transition: all 1.5s ease;
}

.recommand-btn * {
  text-decoration: none;
  color: black;
}

.bar-graph {
  color: #fff;
  font-size: 11px;
  line-height: 25px;
  height: 25px;
  margin-bottom: 5px;

  background-color: white;

  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;

}

.bar-graph * {
  -webkit-transition: all 1.5s ease;
  -moz-transition: all 1.5s ease;
  -ms-transition: all 1.5s ease;
  -o-transition: all 1.5s ease;
  transition: all ease 1.5s;
}

.bar-graph div {
  background-color: #ffc600;
  position: relative;
  padding-left: 25px;

  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
</style>