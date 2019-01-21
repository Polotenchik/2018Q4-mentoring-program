const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'custom_loader')],
    },
    devServer: {
        overlay: true, 
        port: 5000,
    },
    watchOptions: {
        aggregateTimeout: 5000,
        poll: 5000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }  
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "index.css"
        })
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? false : 'eval-sourcemap';
    
    return conf;
}