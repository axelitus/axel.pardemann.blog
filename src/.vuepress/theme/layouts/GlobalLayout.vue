<template>
    <div :class="$site.themeConfig.theme" class="flex flex-col min-w-3xs bg-neutral-200 font-sans min-h-screen">
        <app-header />
        <main class="flex-grow w-3/4 my-2 mx-auto p-2">
            <component :is="layout" />
        </main>
        <app-footer :links="$site.themeConfig.nav.links" />
    </div>
</template>

<script>
    import Vue from 'vue'
    import {setGlobalInfo} from '@vuepress/core/lib/client/util'
    import AppHeader from "../components/layout/Header";
    import AppFooter from "../components/layout/Footer";

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

<style lang="css">
    @import "../styles/app.css";
</style>

