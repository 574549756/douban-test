import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"
import axios from "axios"
import "normalize.css"
import "./assets/reset.scss"

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Vuex)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")
