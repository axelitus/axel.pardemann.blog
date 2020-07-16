<template>
    <div :class="$site.themeConfig.theme" class="flex flex-col min-h-screen min-w-3xs bg-neutral-300 font-sans">
        <app-header />
        <main class="flex-grow w-3/4 my-2 mx-auto p-2">
            <component :is="layout" />
        </main>
        <app-footer :links="$site.themeConfig.nav.links" />
    </div>
</template>

<script>
    import {setGlobalInfo} from '@vuepress/core/lib/client/util'
    import Vue from 'vue'
    import AppFooter from "../components/layout/Footer";
    import AppHeader from "../components/layout/Header";

    export default {
        name: 'GlobalLayout',
        components: {
            AppHeader,
            AppFooter
        },
        computed: {
            layout() {
                const layout = this.getLayout()
                setGlobalInfo('layout', layout)
                return Vue.component(layout)
            }
        },
        methods: {
            getLayout() {
                if (this.$page.path) {
                    const layout = this.$page.frontmatter.layout
                    if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
                        || this.$vuepress.getVueComponent(layout))) {
                        return layout
                    }
                    return 'Layout'
                }
                return 'NotFound'
            }
        }
    }
</script>
