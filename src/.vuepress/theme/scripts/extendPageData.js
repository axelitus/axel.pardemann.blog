module.exports = {
    extendPageData(page) {
        ensurePageHasFrontmatter(page)
        classify(page)
        setIsoDate(page)
    }
}

function ensurePageHasFrontmatter(page) {
    if (!page.frontmatter) {
        page.frontmatter = {}
    }
}

function classify(page) {
    page.isHome = page.regularPath === '/'
    page.isPage = page.regularPath.startsWith('/pages/') && page.regularPath !== '/pages/'
    page.isPinned = page.frontmatter.pinned === true
    page.isPost = page.regularPath.startsWith('/posts/') && page.regularPath !== '/posts/'
    page.isTag = page.regularPath.startsWith('/tags/') && page.regularPath !== '/tags/'
}

function setIsoDate(page) {
    page.isoDate = page.frontmatter.date    
}
