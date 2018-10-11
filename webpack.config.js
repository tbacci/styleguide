const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
    entry: {
        main: path.join(__dirname, '/scss/main.scss')
    },
    output: {
        path: path.join(__dirname, '/css'),
        publicPath: "css/"
        // filename: '[name].css'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true',
                ],
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash:5].[ext]',
                        outputPath: 'fonts/',
                        publicPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin([path.join(__dirname, './dist/')]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            // chunkFilename:'[id].[hash].css'
        }),
        new ManifestPlugin({
            publicPath: '/css/'
        })
    ]
};