const {VueLoaderPlugin} = require('vue-loader');
const path = require("path");
const webpack =require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output:{
        publicPath:'/dist',//必须加publicPath
        path:__dirname+'/dist',
        filename:'main.js'
    },
    devServer: {
        // 设置基本目录结构
        contentBase: path.join(__dirname, "dist"),
        // 服务器的ip地址，也可以使用localhost
        host: "localhost",
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 8080
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
            },{
                test: /\.css$/, //css文件加载器
                loaders: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        // 添加VueLoaderPlugin，以响应vue-loader
        new VueLoaderPlugin(),
    ]
};