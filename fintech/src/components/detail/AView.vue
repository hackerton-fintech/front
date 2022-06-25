<template>
  <div class="a">
    <highcharts :options="chartOptions" />
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        title: {
          text: "title",
        },
        subtitle: {
          text: "subtitle",
        },
        yAxis: {
          title: {
            text: "yAxis",
          },
          plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
        },
        series: [
          {
            data: [1, 2, 3], // sample
          },
        ],
      },
    };
  },
};
</script>

<style></style>
