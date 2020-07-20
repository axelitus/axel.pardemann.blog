const twemoji = require('twemoji')
const moment = require('moment-timezone')

module.exports = {
    extendPageData(page) {
        ensurePageHasFrontmatter(page)
        setPublishedAt(page)
        classify(page)
        prefixPermalinks(page)
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
    page.isPublished = page.published_at !== false && typeof page.published_at === 'object'
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

function setPublishedAt(page) {
    let date_regex = /(?<date>(?<year>\d{4})-?(?<month>0[0-9]|1[0-2])-?(?<day>[0-2][0-9]|3[0-1]))(?:[T| ](?<time>(?<hours>[0-1][0-9]|2[0-3]):?(?<minutes>[[0-5][0-9]):?(?<seconds>[0-5][0-9])(?<fraction>.000)?(?:(?<timezone>Z|[+-](?:0[0-9]|1[0-2]):00))))?/gi

    if (page.frontmatter.published_at === undefined || page.frontmatter.published_at === false) {
        page.published_at = false
        return
    }

    let matches = date_regex.exec(page.frontmatter.published_at.toISOString()).groups
    if (matches.time === '00:00:00.000Z') {
        page.published_at = new Date(moment.tz(matches.date + ' 09:00:00', 'America/Mexico_City').format())
        return
    }

    page.published_at = page.frontmatter.published_at
}
