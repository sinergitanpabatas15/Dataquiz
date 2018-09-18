const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: {
        client: ['./src/index.js']
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve('dist'),
        chunkFilename: '[name].[contenthash:5].js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    enforce: true,
                    chunks: 'all'
                }
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    },
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    publicPath: 'dist/'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(sass|css|scss)$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader?url=false', 'postcss-loader', 'sass-loader'],
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        port: 8080,
        publicPath: "/",
        https: false,
        headers: { 'Access-Control-Allow-Origin': '*' },
        open: 'http://localhost:8080/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new MiniCssExtractPlugin({ publicPath: '/', filename: 'style.min.css' }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin(['dist', 'build'], {
            verbose: true, 
            dry: false,
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, '/')
        })
    ]
};
