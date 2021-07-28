const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDeveloment = process.env.NODE_ENV !== 'production'


module.exports = {
    mode: isDeveloment ? 'development' : 'production',
    devtool: isDeveloment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        isDeveloment && new ReactRefreshWebPackPlugin({

        })
    ].filter(Boolean),
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        isDeveloment && require.resolve('react-refresh/babel')
                    ].filter(Boolean)
                }
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
        ],
    }
};