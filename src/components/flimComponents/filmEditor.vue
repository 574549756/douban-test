<template>
  <div class="filmContainerDetail">
    <div class="film-inner" v-for="item in items">
      <h2>{{item.value}}</h2>
      <span>{{label}}{{item.score}}</span>
    </div>
  </div>
</template>
<script>
export default {
	props: ["items", "label"]
}
</script>
<style lang="scss">
.filmContainerDetail {
	margin: 20px 0;
	width: 700px;
	.film-inner {
		display: flex;
		margin: 10px 0;
		justify-content: space-between;
		align-items: flex-end;
		h2 {
			color: #37a;
			font-size: 14px;
			font-weight: normal;
		}
	}
}
</style>
