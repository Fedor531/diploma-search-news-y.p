const webpack = require('webpack');

const path = require('path'); // Переменная превращает относительный путь в абсолютный

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about/about.js',
        analytics: './src/analytics/analytics.js'
    }, // Точка входа

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'/* При сборке в [name] будут записаны разные названия js-файлов */
    },

    resolve: {
        extensions: ['.js', '.json'],// Для того чтобы при импорте не указывать тип расширения
    },

    module: {

        rules: [{ // тут описываются правила
            test: /\.js$/, // регулярное выражение, которое ищет все js файлы
            use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
            exclude: /node_modules/ // исключает папку node_modules
        },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            esModule: false
                        },
                    },
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }
        ],

    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/about/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/analytics/analytics.html',
            filename: 'analytics.html',
            chunks: ['analytics']
        }),

        new WebpackMd5Hash(),

        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })

    ]

};
