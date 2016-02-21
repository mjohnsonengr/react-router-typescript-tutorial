module.exports = {
    entry: './index.tsx',

    output: {
        filename: 'bundle.js',
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
    }
};
