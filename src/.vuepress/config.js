const {description} = require('../../package')

module.exports = {
    title: "Axel Pardemann Blog",
    description: description,

    head: [],

    themeConfig: {
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
