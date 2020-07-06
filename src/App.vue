<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <a-button type="primary">Button></a-button>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        myChart: {},
        option: {
          title: { text: "在Vue中使用echarts" },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        },
      };
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById("main"));
      this.drawChart();
    },
    methods: {
      drawChart() {
        console.log('draw charts')
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(this.option);
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
