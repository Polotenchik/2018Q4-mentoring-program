const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
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
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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