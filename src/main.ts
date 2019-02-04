import Vue from 'vue';
import App from './App.vue';
import PriceToKor from './filters';

Vue.config.productionTip = false;
Vue.use(PriceToKor);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
