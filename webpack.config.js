var path = require('path');

const ROOT_PTAH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PTAH,'src');
const BUILD_PATH = path.resolve(ROOT_PTAH,'build');

module.exports = {
	devtool:'eval-source-map',
	entry: path.join(APP_PATH,'index.jsx'),
	output:{
		path:BUILD_PATH,
		filename:'bundle.js'
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		port:3001
	},
	module:{
		rules:[
			{
				test:/\.jsx$/,
				use:'babel-loader'
			},
			{
				test:/\.scss$/,
				use:[
					{
						loader:"style-loader"
					},
					{
						loader:"css-loader",
						options:{
							modules:true
						}
					},
					{
						loader:"sass-loader"
					}
				]
			},
			{
				test:/\.gif$/,
				loader:"url-loader"
			},
			{
				test:/\.svg$/,
				loader:"svg-sprite-loader"
			}
		]
	},
	resolve:{
		extensions:['.js','.jsx']
	}
}