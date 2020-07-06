import Vue from "vue";
import App from "./App.vue";
import echarts from "echarts";
import axios from "axios";
import { Button, Table, Tag, Divider } from "ant-design-vue";

Vue.use(Button);
Vue.use(Table);
Vue.use(Tag);
Vue.use(Divider);

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
