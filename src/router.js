import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import rating from "./components/rating.vue"
import View from "./components/view.vue"
import wanted from "./components/wanted"
import ratingNum from "./components/ratingNum"

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "View",
			component: View
		},
		{
			path: "/rating",
			name: "rating",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: rating
		},
		{
			path: "/wanted",
			name: "wanted",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: wanted
		},
		{
			path: "/ratingNum",
			name: "ratingNum",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: ratingNum
		}
	]
})
