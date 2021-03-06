const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const config = {
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
							'@babel/transform-runtime',
							'@babel/plugin-proposal-class-properties'
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
	plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ]
}

if (process.env.NODE_ENV !== 'production') {
	const { suppliers, resellers, representatives, transactions } = require('./credentials')
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				SUPPLIERS_SHEET_URL: JSON.stringify(suppliers),
				RESELLERS_SHEET_URL: JSON.stringify(resellers),
				REPRESENTATIVES_SHEET_URL: JSON.stringify(representatives),
				TRANSACTIONS_SHEET_URL: JSON.stringify(transactions)
			}
		})
	)
}

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				SUPPLIERS_SHEET_URL: JSON.stringify(process.env.SUPPLIERS_SHEET_URL),
				RESELLERS_SHEET_URL: JSON.stringify(process.env.RESELLERS_SHEET_URL),
				REPRESENTATIVES_SHEET_URL: JSON.stringify(process.env.REPRESENTATIVES_SHEET_URL),
				TRANSACTIONS_SHEET_URL: JSON.stringify(process.env.TRANSACTIONS_SHEET_URL),
				NODE_ENV: JSON.stringify('production')
			}
		})
	)
}

module.exports = config
