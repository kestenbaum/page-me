const path = require('path');

module.exports = {
    typescript: {
        enableTypeChecking: false,
    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};