const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CompressionPlugin(), // Plugin used to compress build package
        new BundleAnalyzerPlugin() // Plugin used to create an interactive treemap visualization of the contents of all your bundles.
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin() // Plugin used to minify build package
        ],
    },
});