<template>
  <div id="app">
    <!-- <a-button type="primary" @click="drawMap">Load</a-button> -->
    <div id="main" style="width: 600px;height:600px;margin:0 auto"></div>
    <button @click="drawMap">update</button>
    <table>
      <tr>
        <th>Area</th>
        <th>Value</th>
        <th>alias</th>
      </tr>
      <tr v-for="(item, index) in option.series[0].data" :key="index">
        <td>{{ item.name }}</td>
        <td><input type="number" v-model.number="item.value" /></td>
        <td>a</td>
      </tr>
    </table>
  </div>
</template>

<script>
  var china = require("./assets/100000_full.json");

  export default {
    name: "App",
    data() {
      return {
        myChart: {},
        mapdata: {},
        option: {
          title: { text: "地图" },
          tooltip: {},
          toolbox: {
            show: true,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {},
            },
          },
          visualMap: {
            min: 800,
            max: 50000,
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["lightskyblue", "yellow", "orangered"],
            },
          },
          series: [
            {
              name: "CHINA",
              type: "map",
              mapType: "CHINA",
              data: [],
            },
          ],
        },
      };
    },
    mounted() {
      this.loadMap();
      this.myChart = this.$echarts.init(document.getElementById("main"));
      this.drawMap();
    },
    methods: {
      drawMap() {
        console.log("draw charts");
        console.log(this.option);
        // this.option.series[0].data = this.mapdata;
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(this.option);
      },
      loadMap() {
        // this.$axios.get("/api/areas_v2/bound/100000.json");
        this.$echarts.registerMap("CHINA", china);
        this.option.series[0].data = this.$echarts
          .getMap("CHINA")
          .geoJson.features.map((i) => {
            return { name: i.properties.name, value: 0 };
          });
        console.log(this.option.series[0].data);
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
