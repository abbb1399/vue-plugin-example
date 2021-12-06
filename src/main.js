import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './plugins/plugin'

Vue.config.productionTip = false
Vue.use(plugin, { greeting: "hello paul" })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
