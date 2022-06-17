//Setting up configuration for webpack
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    mode:'development',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template:'./src/index.html'
    })],
    module:{
        rules:[{
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
    
    ],
        
    }
}