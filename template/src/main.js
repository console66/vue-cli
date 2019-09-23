import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem.js';
import mylazy from './directive';
import noThing from './components/no-thing'
import Myheader from './components/myHeader';
import {myMixin} from './mixins'
import { AlertPlugin, ConfirmPlugin,DatetimePlugin,LoadingPlugin,ToastPlugin  } from 'vux';
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(DatetimePlugin);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.mixin(myMixin);
Vue.component('noThing',noThing);
Vue.component('my-header', Myheader);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

