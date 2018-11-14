import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		filmData: [
			{
				value: "",
				score: NaN
			}
		],
		getFilmMethods: {
			methods: {
				topRating: "getMovieRatings",
				topView: "getWatchedTheMovieNum",
				topWanted: "getWantToMovieNum",
				topRatingNum: "getMovieRatingsNum"
			},
			sortOrder: { desc: "DESC", asce: "ASCE" }
		},
		pageNum: 1,
		pageNumEnd: 10
	},
	mutations: {
		init(state) {
			state.pageNumEnd = 10
		},
		gotFilmData(state, payload) {
			state.filmData = payload.movieRatingsZset
		},

		more(state) {
			state.pageNumEnd += 10
		}
	},
	actions: {
		initFilm(context) {
			context.commit("init")
		},
		moreFilm(context) {
			context.commit("more")
		},
		sortMethods(context, methods) {
			context.dispatch("getFilmData", methods)
		},
		getFilmData(context, args) {
			axios
				.get(`/api/${args.methods + args.order}`, {
					params: {
						start: this.state.pageNum,
						end:
							this.state.pageNum + this.state.pageNumEnd
					}
				})
				.then(res => {
					context.commit("gotFilmData", res.data)
				})
				.catch(function(error) {
					console.log(error)
				})
		}
	}
})
