<template>
    <div :class="$site.themeConfig.theme" class="flex flex-col min-w-3xs bg-neutral-300 font-sans min-h-screen">
        <Header />
        <div class="flex-grow w-3/4 my-2 mx-auto p-2">
            <component :is="layout" />
        </div>
        <Footer :links="$site.themeConfig.nav.links" />
    </div>
</template>

<script>
    import Vue from 'vue'
    import {setGlobalInfo} from '@vuepress/core/lib/client/util'
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: 'GlobalLayout',
        components: {Footer, Header},
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

