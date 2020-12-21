const webpack = require("webpack");

module.exports = {
    renderer: {
        entry: './src/renderer/javascripts/index.js',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            presets: [
                                '@babel/react',
                                '@babel/preset-env',
                                {
                                    'plugins':
                                        [
                                            ["@babel/plugin-proposal-decorators",{"legacy": true}],
                                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                                            ["@babel/plugin-transform-async-to-generator", {
                                                "module": "mobx",
                                                "method": "flow"
                                            }],
                                            "@babel/transform-runtime"
                                        ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        // plugins: [
        //     new webpack.ExternalsPlugin('commonjs', [
        //         'electron'
        //     ])
        // ]
    },
    preload: {
        entry: './src/preload/index.js'
    },
    main: {
        entry: './src/main/index.js'
    }
}
