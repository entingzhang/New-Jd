import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import *as uiv from 'uiv'
import axios from "axios"

import "./assets/css/font-awesome.min.css";
import "./assets/css/weui.css";
import "./assets/css/swiper.css";
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'

//import "./assets/css/bootstrap.css";
Vue.use(uiv)
Vue.use(ElementUI)

Vue.config.productionTip = false

// 设置服务器地址
Vue.prototype.serveRoot = "http://192.168.255.113:8888";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
