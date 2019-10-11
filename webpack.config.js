const {
    VueLoaderPlugin
} = require('vue-loader');
const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        // 设置基本目录结构
        contentBase: path.join(__dirname, 'dist'),
        // 服务器的ip地址，也可以使用localhost
        host: "localhost",
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 8080,
        hot:true,
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/, //vue文件加载器
                use: ['vue-loader']
            }, {
                test: /\.js$/, //js文件加载器
                use: ['babel-loader'],
            }, {
                test: /\.css$/, //css文件加载器
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        // 添加VueLoaderPlugin，以响应vue-loader
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html'), 
        }),
    ]
};