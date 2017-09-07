const { HotModuleReplacementPlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        __dirname + '/src/index'
    ],

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    devServer: {
        contentBase: __dirname + '/dist',
        port: 3000,
        hot: true,
        hotOnly: true,
        inline: true,
        historyApiFallback: true
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
            }
        ]
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: __dirname + '/index.html' },
            { from: __dirname + '/styles.css' },
        ])
    ]
};