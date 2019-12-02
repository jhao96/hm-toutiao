import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant,是一个插件，包含多个组件，称为插件
import vant from 'vant'
// 导入vant css文件
import 'vant/lib/index.css'
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
