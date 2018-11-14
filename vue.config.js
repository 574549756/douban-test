module.exports = {
	devServer: {
		proxy: {
			"/api": {
				target: "http://www.shierblog.cn:8080",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	}
}
