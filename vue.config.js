const webpack = require('webpack')
const path = require('path');
const config = {
    // 本地打包配置
    development: {
        lintOnSave: false,
        chainWebpack: config => {
            //移除prefetch插件
            config.plugins.delete('prefetch');
            config.plugin('provide').use(webpack.ProvidePlugin, [{
                '$conf': path.resolve(__dirname, './src/project-config.js')
            }]);
        },
        configureWebpack: config => {
            require('vux-loader').merge(config, {
                options: {},
                plugins: ['vux-ui']
            });

        },
    },
    // 测试打包配置
    test: {
        publicPath: './',
        assetsDir: 'static',
        lintOnSave: false,
        chainWebpack: config => {
            //移除prefetch插件
            config.plugins.delete('prefetch');
            config.plugin('provide').use(webpack.ProvidePlugin, [{
                '$conf': path.resolve(__dirname, './src/project-config.js')
            }]);
            config

                .devtool('source-map') // 添加 source-map
                .output
                .filename(`static/js/[name].js`) // 输出文件名字及位置
        },
        configureWebpack: config => {
            require('vux-loader').merge(config, {
                options: {},
                plugins: ['vux-ui']
            });

        },

    },
    // 生产打包配置
    production: {
        publicPath: './',
        assetsDir: 'static',
        productionSourceMap: false,
        lintOnSave: false,
        chainWebpack: config => {
            //移除prefetch插件
            config.plugins.delete('prefetch');
            config.plugin('provide').use(webpack.ProvidePlugin, [{
                '$conf': path.resolve(__dirname, './src/project-config.js')
            }]);
        },
        configureWebpack: config => {
            require('vux-loader').merge(config, {
                options: {},
                plugins: ['vux-ui']
            });

        },
    }
}
console.log(process.env.NODE_ENV)
module.exports = config[process.env.NODE_ENV];