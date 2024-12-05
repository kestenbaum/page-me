const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // теперь @ будет указывать на папку src
        },
    },
};