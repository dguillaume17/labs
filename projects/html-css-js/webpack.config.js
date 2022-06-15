const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/src/main.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '/dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/src'),
        },
        watchFiles: [
            path.join(__dirname, '/src/*.html')
        ],
        compress: true,
        port: 9000,
        client: {
            progress: true, // prints compilation progress in percentage in the browser
            reconnect: true // when true, dev-server will try to reconnect the client unlimited times
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                type: 'asset/source'
            },
            {
                test: /\.html/,
                type: 'asset/source',
                exclude: [
                    /index.html/
                ],
            }
        ]
    },
};