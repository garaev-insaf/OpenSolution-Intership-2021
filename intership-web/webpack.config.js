'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 
var CopyWebpackPlugin = require('copy-webpack-plugin');

function buildConfig(env) {
    var isProduction = (env === 'prod');

    var cfg = {
        context: path.resolve(__dirname, './app'),
        mode: isProduction ? 'production' : 'development',
        entry: './index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                enforce: 'pre',
                use: 'tslint-loader'
            }, {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }, {
                test: /\.sass$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader'
                ]
            }]
            
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx']
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/app/index.html'
            }),
            new MiniCssExtractPlugin({
                // filename: isProduction ? '[name].[hash].css' : '[name].css',
                // chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
                filename: '[name].css',
                chunkFilename: '[id].css',
            })
        ]
    };
    if (!isProduction) {
        cfg.devServer = {
            contentBase: path.join(__dirname, 'dist'),
                port: 3000,
                inline: true,
                stats: {
                cached: false
            },
            historyApiFallback: true,
                open: true
        };
        cfg.cache = false;
        cfg.devtool = 'inline-source-map';
    }
    return cfg;
}

module.exports = buildConfig;
