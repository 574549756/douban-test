<template>
  <main>
    <div class="filmContainer" v-if="afterSort">
      <div class="filmContainerDetail">
        <filmEditor v-bind:items="afterSort" v-if="afterSort" label="期待人数："/>
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
			methods: this.filmMode.methods.topWanted,
			order: this.filmMode.sortOrder.desc
		})
	},
	methods: {
		more() {
			this.$store.dispatch("moreFilm")
			this.$store.dispatch("sortMethods", {
				methods: this.filmMode.methods.topWanted,
				order: this.filmMode.sortOrder.desc
			})
		}
	},
	components: {
		filmEditor
	}
}
</script>
