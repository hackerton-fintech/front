<template>
  <div style="display:flex; height:100%; flex-direction: column;">
    <div style="display:flex; flex-direction:row; background-color: rgb(41,137,134); height:50%">



      <div class="info-user-detail"
        style="display:flex; flex-direction: column; flex-grow: 1; justify-content: start; align-items: flex-start;  margin-left: 20px; height: inherit; padding-bottom: 10%; padding-top:15%;">

        <animated-number :value="1000000" :formatValue="formatMoney" :duration="1500"
          style="margin:0 auto; color:white; font-weight:900; font-size:2rem;" />

        <span style="font-size:150%; font-weight: 700; padding-top: 5%;">
          {{ user.characteristic }}
        </span>

        <span>{{ user.name }}</span>


      </div>
    </div>

    <div class="recommand-btn" style="width:100%;margin-top: 5%; margin-bottom: 5%; background-color: white;">
      <div v-for="item in items" :key="item.id">

        <div>
          <router-link :to="{ name: item.link }"
            style="display:flex; flex-direction: row; align-items: center; justify-content: space-between;">
            <div class="bar-graph">

              <div class="content" :data-width="`${item.percent}`" style=";">
              </div>
              <animated-number class="contnet-num" :value="`${item.percent}`" :formatValue="format" :duration="1500"
                style="color:rgba(41,137,134,1); margin: 3px 5px 1px 1px; font-size:1.3rem;" />
            </div>
            <div style="display:flex; justify-content: center; flex-grow: 1;">
              <div>
                <span style="color:rgba(41, 137, 134, 0.9); font-size:1rem; font-weight: 600;">{{ item.name }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  name: 'HomeView',
  data() {
    return {
      items: [],
    }
  },
  props: {
    user: {
      name: String,
      characteristic: String,

    },

  },
  components: {
    AnimatedNumber
  },
  watch: {
  },
  methods: {
    formatMoney(value) {
      return `￦${value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    },
    format(value) {
      return `${value.toFixed(2)}`;
    }
  },
  created() {
    const name  = ['예금 비중',	'채권 비중',	'주식 비중',	'금 비중',	'원자재 비중',	'부동산 비중',	'나스닥 비중']
    const link = ['deposit', 'bond', 'stock', 'gold', 'material', 'house', 'nasdok']
    const val = [0.15511477,	0.18381329,	0.08386336,	0.22952831,	0.08252258,	0.11588029,	0.14927739]

    for(let i =0; i<name.length; i++){
      this.items.push({link:link[i], name:(name[i].split(" "))[0], percent:(val[i]*100), image:""});
    }
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
.info-user-detail span {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.tran-enter-to {
  transition: all 1.5s ease;
}

.recommand-btn * {
  text-decoration: none;
  color: black;
}

.bar-graph {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
  font-size: 11px;
  line-height: 25px;
  height: 20px;
  width: 80%;
  background-color: rgba(41, 137, 134, 0.1);
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

.bar-graph .content {
  background-color: rgba(41, 137, 134, 0.4);
  position: relative;
  text-align: center;
  padding-left: 25px;
  border-radius: 5px;
}
</style>
