var webpack = require('webpack');

module.exports = {
    entry: './index.tsx',

    output: {
        filename: 'bundle.js',
        path: 'public',
        publicPath: ''
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".ts", ".tsx"]
    },
    devtool: 'source-map',

    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ]
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : []
};
