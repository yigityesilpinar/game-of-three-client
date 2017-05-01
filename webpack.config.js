var path = require('path');
var webpack = require("webpack");

var BABEL_QUERY = {
    plugins: [
        ["transform-es2015-spread"],
        ["transform-class-properties"],
        ["transform-es2015-classes"]
    ]
};
// Webpack production configurations did not apply yet because the development process is not finished

// CommonJS module
module.exports = {
    entry:  path.resolve('./src/index.js'),
    output:{
        path: path.resolve('./out'),
        publicPath: '/',
        filename:"bundle.js"
    },

    devServer: {
        contentBase: path.resolve('./out/'),
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.NoEmitOnErrorsPlugin()],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, "src")],
                exclude: /node_modules/,
                loader: "babel-loader",
                query: BABEL_QUERY
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-url-loader'
            },
        ]

    },


};