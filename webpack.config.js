const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const VENDOR_LIBS = [
    '@emotion/react',
    '@emotion/styled',
    '@mui/icons-material',
    '@mui/material',
    'axios',
    'i18next',
    'i18next-browser-languagedetector',
    'react',
    'react-devtools',
    'react-dom',
    'react-i18next',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-saga'
]

module.exports = (env, args) => {
    const isDev = args.mode === 'development'
    const entry = isDev
        ? {
              bundle: './src/index.js'
          }
        : {
              bundle: './src/index.js',
              vendor: VENDOR_LIBS
          }
    const filename = isDev ? 'bundle.js' : '[name].[chunkhash].js'
    return {
        entry: entry,
        output: {
            path: path.resolve(__dirname, './build'),
            filename: filename,
            publicPath: '/'
        },
        devServer: {
            // port: 8080,
            open: true,
            hot: true,
            historyApiFallback: true,
            compress: true
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    loader: 'file-loader',
                    test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
                }
            ]
        },
        // optimization: {
        //     splitChunks: {
        //         chunks: 'all'
        //     }
        // },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new BundleAnalyzerPlugin()
        ],
        resolve: {
            extensions: ['.json', '.js', '.jsx'],
            modules: [path.resolve('./src'), path.resolve('./node_modules')]
        }
    }
}
