const twemoji = require('twemoji')

module.exports = {
    extendPageData(page) {
        ensurePageHasFrontmatter(page)
        classify(page)
        prefixPermalinks(page)
        setIsoDate(page)
        renderTitle(page)
    }
}

function ensurePageHasFrontmatter(page) {
    if (!page.frontmatter) {
        page.frontmatter = {}
    }
}

function classify(page) {
    page.isFeatured = page.frontmatter.featured === true
    page.isHome = page.regularPath === '/'
    page.isPage = page.regularPath.startsWith('/pages/') && page.regularPath !== '/pages/'
    page.isPost = page.regularPath.startsWith('/posts/') && page.regularPath !== '/posts/'
    page.isTag = page.regularPath.startsWith('/tags/') && page.regularPath !== '/tags/'
}

function prefixPermalinks(page) {
    if (page.isPage && !page.frontmatter.permalink.startsWith('pages/')) {
        page.frontmatter.permalink = 'pages/' + page.frontmatter.permalink
    }

    if (page.isPost && !page.frontmatter.permalink.startsWith('posts/')) {
        page.frontmatter.permalink = 'posts/' + page.frontmatter.permalink
    }
}

function renderTitle(page) {
    if (typeof page.title !== 'string') {
        return
    }

    page.renderedTitle = twemoji.parse(page._context.markdown.render(page.title)['html'])
        .replace(/(<(\/?[p|div|h\d]+)>)/ig, '')
}

function setIsoDate(page) {
    page.isoDate = page.frontmatter.date
}
