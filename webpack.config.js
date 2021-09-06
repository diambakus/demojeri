const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const PATHS = {
    root: path.resolve(__dirname, '.'),
    src: path.resolve(__dirname, './src/main/typescript'),
    images: path.resolve(__dirname, './images'),
    dist: path.resolve(__dirname, './src/main/resources/static'),
    imagesDist: path.resolve(__dirname, './src/main/resources/static/images'),
    components: path.resolve(__dirname, './src/main/typescript/components'),
    index: path.resolve(__dirname, './src/main/typescript/Index.tsx')
}

options = {
    context: PATHS.root,
    target: 'web',
    mode: 'production',
    entry: {
        app: [
            PATHS.index
        ]
    },
    output: {
        path: PATHS.dist,
        filename: 'index.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            Components: PATHS.components
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            include: PATHS.src,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    compilerOptions: {
                        sourceMap: true,
                        target: 'es2015',
                        isolatedModules: true,
                        noEmitOnError: false
                    }
                }
            }, ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: false
        }),
        new CopyPlugin([
            { from: PATHS.images, to: PATHS.imagesDist }
        ])
    ]
}

module.exports = options