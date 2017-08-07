const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const DIST_VENDOR_JS = 'vendor/js/';

/*
 * settings for external libraries
 */
const EXTERNALS = [
    {
        name: 'vue',
        object: 'Vue',
        dir: 'node_modules/vue/dist',
        filename: 'vue.min.js'
    }
];

const extractSass = new ExtractTextPlugin({
    filename: 'app.css'
});

const copyVendor = new CopyWebpackPlugin(EXTERNALS.map(e => {
    return {
        from: path.join(e.dir, e.filename),
        to: DIST_VENDOR_JS
    };
}));

const html = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
    hash: true
});

const include = new HtmlWebpackIncludeAssetsPlugin({
    assets: EXTERNALS.map(e => {
        return path.join(DIST_VENDOR_JS, e.filename);
    }),
    append: false,
    hash: true
});

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        extractSass,
        copyVendor,
        html,
        include
    ],
    externals: {} /* use EXTERNALS */,
    devtool: 'source-map'
};

EXTERNALS.forEach(e => {
    module.exports.externals[e.name] = e.object;
});