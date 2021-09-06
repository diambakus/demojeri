const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const options = require('./webpack.config')

const DEV_SERVER = {
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    overlay: true,
    watchOptions: {
        poll: 1000,
        ignored: path.resolve(__dirname, './node_modules')
    },
    proxy: {
        '/api': {
           target: {
              host: "localhost",
              protocol: 'http:',
              port: 8080
           },
        }
     }
}

options.mode = 'development';
options.cache = true;
options.devtool = 'eval-source-map';
options.devServer = DEV_SERVER;
options.node = {
    fs: 'empty'
},
options.entry = {
    app: [
        'react-hot-loader/patch',
        options.entry.app[0]
    ]
};
options.module.rules[0].use[1].options.compilerOptions.sourceMap = true;
options.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new HtmlWebpackPlugin({
        template: './index.html',
        inject: false
    }),
    new webpack.HotModuleReplacementPlugin({})
];

module.exports = options