const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						],
						plugins: [
							'@babel/transform-runtime'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'raw-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	]
}