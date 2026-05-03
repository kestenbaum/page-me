const path = require('path');

module.exports = {
    typescript: {
        enableTypeChecking: false,
    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        configure: (webpackConfig) => {
            if (webpackConfig.optimization) {
                webpackConfig.optimization.minimize = process.env.NODE_ENV === 'production';
            }
            const miniCssPlugin = webpackConfig.plugins.find(
                (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
            );
            if (miniCssPlugin) {
                miniCssPlugin.options.ignoreOrder = true;
            }
            
            return webpackConfig;
        },
    },
};