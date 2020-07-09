const {description} = require('../../package')

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
        url: 'https://axel.pardemann.blog',
        theme: 'theme-nord',
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

    postcss: {
        plugins: [
            require('postcss-import'),
            require('tailwindcss'),
        ]
    },
}
