const path = require('path')

module.exports = {
    plugins: [
        ['@vuepress/blog', {}],
        require('./scripts/extendPageData.js'),
    ],
    enhanceAppFiles: [
        path.resolve(__dirname, 'scripts', 'posts.js'),
    ],
}
