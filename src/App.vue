<template>
  <div id="app">
    <header class="header">
      <div class="headerContainer">
        <h1>豆瓣电影排名</h1>
      </div>
      <hr>
      <div class="router">
        <router-link to="/">按播放次数</router-link>
        <router-link to="/rating">按评分</router-link>
        <router-link to="/wanted">按期待值</router-link>
        <router-link to="/RatingNum">按评分人数</router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
import store from "./store"
import { debug } from "util"

export default {
	data() {
		return {}
	},
	name: "App",
	store,
	computed: {
		set() {},
		afterSort() {
			return store.state.filmData
		},
		filmMode() {
			return store.state.getFilmMethods
		}
	},

	methods: {
		test() {
			console.log(this.afterSort)
		}
	}
}
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	margin: auto;
	flex-direction: column;
}
#app {
	.header {
		background: #f0f3f5;
		hr {
			background: #e5ebe4;
			border: 0;
			height: 1px;
		}
		.headerContainer {
			color: #27a;
			height: 74px;
			margin: auto;
			width: 700px;
			display: flex;
			justify-content: flex-start;
			font-display: column;
		}
		.router {
			padding: 10px 0;
			display: flex;
			width: 700px;
			margin: auto;
			a {
				color: #27a;
				font-size: 14px;
				margin-right: 35px;
			}
		}
	}
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
