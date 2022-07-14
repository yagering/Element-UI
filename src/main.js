// import { from } from 'core-js/core/array'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Input,Row,Col} from 'element-ui'

Vue.use(Button);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
