var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var depupePlugin = webpack.optimize.DedupePlugin;

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.(png|jpg)$/, loader: "url-loader?limit=10000&minetype=image/png" },
		]
	},
	plugins: [
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new depupePlugin()
	]
};