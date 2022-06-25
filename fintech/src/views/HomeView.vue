<template>
  <div style="display: flex; height: 100%; flex-direction: column">
    <div
      style="
        background-color: white;
        border-radius: 8px;
        width: 80%;
        margin: 0 auto;
        margin-top: 100px;
      "
    >
      <div style="font-size: 20px">xnwk qnstjr</div>
      <div>user name</div>
      <div>wktks</div>
      <animated-number :value="100000000" :formatValue="formatMoney" :duration="1500" />
    </div>

    <div
      class="recommand-btn"
      style="
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 30px;
        background-color: white;
        border-radius: 10px;
      "
    >
      <div v-for="item in items" :key="item.id">
        <div style="margin-top: 5px">
          <router-link :to="{ name: item.link }">
            <div class="bar-graph">
              <div class="content" :data-width="`${item.percent}`" style=" ;">
                <animated-number
                  :value="`${item.percent}`"
                  :formatValue="format"
                  :duration="1500"
                />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AnimatedNumber from "animated-number-vue";
export default {
  name: "HomeView",
  data() {
    return {
      items: [],
    };
  },
  components: {
    AnimatedNumber,
  },
  watch: {},
  methods: {
    formatMoney(value) {
      return `${value
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },
    format(value) {
      return `${value.toFixed(0)}`;
    },
  },
  created() {
    axios.get("http://localhost:8888/info").then((res) => {
      this.items = res.data;
    });
    this.items = [
      { link: "stock", name: "주식", percent: "14" },
      { link: "bond", name: "채권", percent: "60" },
      { link: "deposit", name: "예금", percent: "15" },
      { link: "DepositView", name: "123", percent: "5" },
      { link: "DepositView", name: "asd", percent: "6" },
    ];
    console.log(this.items);
  },
  mounted() {
    document.querySelectorAll(".bar-graph div").forEach((el) => {
      el.setAttribute(
        "style",
        "width:" + el.getAttribute("data-width") + "%; transition-duration: 1s;"
      );
    });
  },
};
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
  text-align: center;
  margin-left: 5px;
  padding-left: 25px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
</style>
