import Vue from 'vue'
import App from './App.vue'
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import echarts from 'echarts';
import axios from 'axios';

Vue.component(Button.name, Button);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
