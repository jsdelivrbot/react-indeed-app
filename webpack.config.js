const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');



module.exports = {
    entry: './src/index.js',
    output: {
  path: __dirname,
  filename: './dist/app.bundle.js'
  },
    module:{
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
         {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',

     }

        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: process.env.PORT,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    plugins: [new HtmlWebpackPlugin({
         template: './src/index.html'
    }),
     new ExtractTextPlugin('style.css')
    ]
}
