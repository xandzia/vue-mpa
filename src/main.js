import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'navbar/dist/navbar.css'
import 'list/dist/list.css'
import 'image-item/dist/image-item.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
