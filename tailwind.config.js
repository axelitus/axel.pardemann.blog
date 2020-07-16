const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamilyCode = [
    'Fira Code', 'Fira Mono', 'Ubuntu Mono',
    ...defaultTheme.fontFamily.mono,
]

module.exports = {
    purge: [
        './src/.vuepress/**/*.vue',
    ],
    theme: {
        colors: {
            white: '#ffffff',
            black: '#000000',
            'neutral-050': 'var(--color-neutral-050)',
            'neutral-100': 'var(--color-neutral-100)',
            'neutral-200': 'var(--color-neutral-200)',
            'neutral-300': 'var(--color-neutral-300)',
            'neutral-400': 'var(--color-neutral-400)',
            'neutral-500': 'var(--color-neutral-500)',
            'neutral-600': 'var(--color-neutral-600)',
            'neutral-700': 'var(--color-neutral-700)',
            'neutral-800': 'var(--color-neutral-800)',
            'neutral-900': 'var(--color-neutral-900)',
            'primary-050': 'var(--color-primary-050)',
            'primary-100': 'var(--color-primary-100)',
            'primary-200': 'var(--color-primary-200)',
            'primary-300': 'var(--color-primary-300)',
            'primary-400': 'var(--color-primary-400)',
            'primary-500': 'var(--color-primary-500)',
            'primary-600': 'var(--color-primary-600)',
            'primary-700': 'var(--color-primary-700)',
            'primary-800': 'var(--color-primary-800)',
            'primary-900': 'var(--color-primary-900)',
            'support-first-050': 'var(--color-support-first-050)',
            'support-first-100': 'var(--color-support-first-100)',
            'support-first-200': 'var(--color-support-first-200)',
            'support-first-300': 'var(--color-support-first-300)',
            'support-first-400': 'var(--color-support-first-400)',
            'support-first-500': 'var(--color-support-first-500)',
            'support-first-600': 'var(--color-support-first-600)',
            'support-first-700': 'var(--color-support-first-700)',
            'support-first-800': 'var(--color-support-first-800)',
            'support-first-900': 'var(--color-support-first-900)',
            'support-second-050': 'var(--color-support-second-050)',
            'support-second-100': 'var(--color-support-second-100)',
            'support-second-200': 'var(--color-support-second-200)',
            'support-second-300': 'var(--color-support-second-300)',
            'support-second-400': 'var(--color-support-second-400)',
            'support-second-500': 'var(--color-support-second-500)',
            'support-second-600': 'var(--color-support-second-600)',
            'support-second-700': 'var(--color-support-second-700)',
            'support-second-800': 'var(--color-support-second-800)',
            'support-second-900': 'var(--color-support-second-900)',
            'support-third-050': 'var(--color-support-third-050)',
            'support-third-100': 'var(--color-support-third-100)',
            'support-third-200': 'var(--color-support-third-200)',
            'support-third-300': 'var(--color-support-third-300)',
            'support-third-400': 'var(--color-support-third-400)',
            'support-third-500': 'var(--color-support-third-500)',
            'support-third-600': 'var(--color-support-third-600)',
            'support-third-700': 'var(--color-support-third-700)',
            'support-third-800': 'var(--color-support-third-800)',
            'support-third-900': 'var(--color-support-third-900)',
            'support-fourth-050': 'var(--color-support-fourth-050)',
            'support-fourth-100': 'var(--color-support-fourth-100)',
            'support-fourth-200': 'var(--color-support-fourth-200)',
            'support-fourth-300': 'var(--color-support-fourth-300)',
            'support-fourth-400': 'var(--color-support-fourth-400)',
            'support-fourth-500': 'var(--color-support-fourth-500)',
            'support-fourth-600': 'var(--color-support-fourth-600)',
            'support-fourth-700': 'var(--color-support-fourth-700)',
            'support-fourth-800': 'var(--color-support-fourth-800)',
            'support-fourth-900': 'var(--color-support-fourth-900)',
            'support-fifth-050': 'var(--color-support-fifth-050)',
            'support-fifth-100': 'var(--color-support-fifth-100)',
            'support-fifth-200': 'var(--color-support-fifth-200)',
            'support-fifth-300': 'var(--color-support-fifth-300)',
            'support-fifth-400': 'var(--color-support-fifth-400)',
            'support-fifth-500': 'var(--color-support-fifth-500)',
            'support-fifth-600': 'var(--color-support-fifth-600)',
            'support-fifth-700': 'var(--color-support-fifth-700)',
            'support-fifth-800': 'var(--color-support-fifth-800)',
            'support-fifth-900': 'var(--color-support-fifth-900)',
        },
        extend: {
            screens: {
                '3xs': '240px',
                '2xs': '320px',
                'xs': '480px',
                ...defaultTheme.screens,
                '2xl': '1440px',
            },
            fontFamily: {
                'code': fontFamilyCode,
                'mono': [
                    'Ubuntu Mono',
                    ...defaultTheme.fontFamily.mono,
                ],
                'sans': [
                    'Ubuntu',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            minWidth: {
                ...defaultTheme.minWidth,
                '0':
                    '0',
                '3xs':
                    '240px',
                'full':
                    '100%',
            },
            maxWidth: {
                ...defaultTheme.maxWidth,
                'xl': '1280px',
                '2xl': '1440px',
            },
            typography: {
                default: {
                    css: {
                        color: 'var(--color-neutral-600)',
                        a: {
                            color: 'var(--color-primary-500)',
                            '&:hover': {
                                color: 'var(--color-primary-700)',
                            },
                        },
                        'pre code': {
                            fontFamily: fontFamilyCode.join(', '),
                        },
                        h1: {
                            color: 'var(--color-neutral-600)',
                            border: 'none',
                        },
                        h2: {
                            color: 'var(--color-neutral-600)',
                            border: 'none',
                        },
                        h3: {
                            color: 'var(--color-neutral-600)',
                            border: 'none',
                        },
                        h4: {
                            color: 'var(--color-neutral-600)',
                            border: 'none',
                        },
                    },
                },
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            transitionTimingFunction: {
                'ease-in-quad': 'cubic-bezier(0.11, 0, 0.5, 0)',
                'ease-out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)'
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
