const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        'dist/out.js': './js/index.js'
    },
    output : {
        path: __dirname +'/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'eval-source-map',
    devServer: {
        inline:true,
        contentBase: "./",
        port: 3002
        },
    module: {
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ],

        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css')
    ]


}
