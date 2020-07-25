const description = require('../../package').description.replace("Axel Pardemann Blog - ", "")
const twemoji = require('twemoji')

const canonical_base = 'https://axel.pardemann.blog'

module.exports = {
    title: "Axel Pardemann Blog",
    description: description,

    head: [
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#85b1c8'}],
        ['meta', {name: 'msapplication-TileColor', content: '#242933'}],
        ['meta', {name: 'theme-color', content: "#242933"}],
    ],

    themeConfig: {
        url: canonical_base,
        cssTheme: 'theme-nord',
        nav: {
            title: 'Axel Pardemann',
            subtitle: 'Blog',
            logo: 'images/runestone.svg',
            links: [
                {name: 'About Me', attrs: {href: 'https://axel.pardemann.me'}},
                {name: 'Projects', attrs: {href: 'https://axel.pardemann.me/projects'}},
                {name: 'Hobbies', attrs: {href: 'https://axel.pardemann.me/hobbies'}},
                {name: 'Uses', attrs: {href: 'https://axel.pardemann.me/uses'}},
            ]
        }
    },

    plugins: [
        '@vuepress/last-updated',
        ['vuepress-plugin-feed', {
            canonical_base: canonical_base,
            description: description,
            posts_directories: ['/posts/'],
            feedLinks: {
                rss: `${canonical_base}/rss.xml`,
                json: `${canonical_base}/feed.json`,
                atom: `${canonical_base}/feed.atom`,
            },
            feeds: {
                rss2: {
                    enable: true,
                    filename: 'rss.xml',
                    head_link: {
                        enable: true,
                        type: 'application/rss+xml',
                        title: '%%site_title%% RSS Feed',
                    },
                },
                atom1: {
                    enable: true,
                    file_name: 'feed.atom',
                    head_link: {
                        enable: true,
                        type: 'application/atom+xml',
                        title: '%%site_title%% Atom Feed',
                    },
                },
                json1: {
                    enable: true,
                    file_name: 'feed.json',
                    head_link: {
                        enable: true,
                        type: 'application/json',
                        title: '%%site_title%% JSON Feed',
                    },
                }
            }
        }],
    ],

    postcss: {
        plugins: [
            require('postcss-import'),
            require('tailwindcss'),
        ]
    },

    markdown: {
        extendMarkdown: (md) => {
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-container'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-emoji'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-ins'))
            md.use(require('markdown-it-mark'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-sup'))

            md.set({
                html: true,
                linkify: true,
                typographer: true,
            })

            md.renderer.rules.emoji = function (token, idx) {
                return twemoji.parse(token[idx].content);
            }
        },
        lineNumbers: true,
    },
}
