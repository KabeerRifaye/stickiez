module.exports = {
	entry: "./app-client.js",
	output: { 
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|server.js)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ["react"]
				}
			}
		]
	}
};