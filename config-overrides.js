const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
	addLessLoader({
		javascriptEnabled: true,
		// modifyVars: {
		// 	"@primary-color": "#000",
		// 	"@text-color": "#000",
		// 	"@font-size-base": "16px",
		// 	"@border-color-base": "rgba(0, 0, 0, 0.45)",
		// },
	}),
	fixBabelImports("import", {
		libraryName: "antd",
		libraryDirectory: "es",
		style: true,
		modules: true,

		options: {
			modules: true, // must add this
		},
		test: /\.css$/,
		loaders: ["style-loader", "css-loader?modules"],
	})
);
