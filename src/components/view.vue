<template>
  <main>
    <header class="sorting"></header>
    <div class="filmContainer" v-if="afterSort">
      <div class="filmContainerDetail">
        <filmEditor v-bind:items="afterSort" v-if="afterSort" label="观看次数:"/>
      </div>
    </div>
    <footer class="action" v-on:click="more">加载更多</footer>
  </main>
</template>
<script>
import filmEditor from "./flimComponents/filmEditor"
export default {
	computed: {
		afterSort() {
			return this.$store.state.filmData
		},
		filmMode() {
			return this.$store.state.getFilmMethods
		}
	},
	created() {
		this.$store.dispatch("initFilm")
		this.$store.dispatch("sortMethods", {
			methods: this.filmMode.methods.topView,
			order: this.filmMode.sortOrder.desc
		})
	},
	methods: {
		more() {
			this.$store.dispatch("moreFilm")
			this.$store.dispatch("sortMethods", {
				methods: this.filmMode.methods.topView,
				order: this.filmMode.sortOrder.desc
			})
		}
	},
	components: {
		filmEditor
	}
}
</script>
<style lang="scss">
main {
	display: flex;
	margin: auto;
	.action {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #eee;
		color: #37a;
		font-size: 14px;
		height: 34px;
		cursor: pointer;
	}
	.filmContainer {
		display: flex;
		flex-direction: column;
		.filmContainerDetail {
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
