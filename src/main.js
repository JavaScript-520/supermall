//导入Vue组件
import Vue from 'vue'

//导入自定义组件App
import App from './App.vue'
//导入自定义路由表Router
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
