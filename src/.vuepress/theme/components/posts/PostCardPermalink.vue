<template>
    <span>
        <a class="cursor-pointer hover:text-primary-300"
           v-clipboard="fullQualifiedPermalink"
           v-clipboard:success="clipboardSuccessHandler"
           v-clipboard:error="clipboardErrorHandler"
        >
            <svg class="inline-block h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
            </svg>
            <time :datetime="date">{{ formattedDate }} ({{ relativeDate }})</time>
        </a>
        <transition enter-active-class="transition-all duration-300 ease-out-quad"
                    leave-active-class="transition-all duration-300 ease-in-quad"
                    enter-class="opacity-0 scale-70 ml-2 md:ml-4"
                    enter-to-class="opacity-100 scale-100 ml-0"
                    leave-class="opacity-100 scale-100 ml-0"
                    leave-to-class="opacity-0 scale-70 ml-2 md:ml-4"
        >
            <span class="text-support-fourth-400" v-show="showCopiedMessage">- copied!</span>
        </transition>
    </span>
</template>

<script>
    import {formatDate, relativeDate} from '@theme/scripts/utils'

    export default {
        name: "PostCardPermalink",
        computed: {
            formattedDate() {
                return formatDate(this.date)
            },
            relativeDate() {
                return relativeDate(this.date)
            },
            fullQualifiedPermalink() {
                return this.$site.themeConfig.url + '/' + this.permalink
            }
        },
        data() {
            return {
                showCopiedMessage: false,
                timer: null,
            }
        },
        methods: {
            clipboardSuccessHandler({value, event}) {
                this.showCopiedMessage = true
                this.timer = setInterval(this.hideCopiedMessage, 3000)
                console.log('success', value)
            },
            clipboardErrorHandler({value, event}) {
                console.log('error', value)
            },
            hideCopiedMessage() {
                this.showCopiedMessage = false
                clearInterval(this.timer)
            },
        },
        props: {
            date: {
                type: String,
                required: true,
            },
            permalink: {
                type: String,
                required: true,
            },
        },
    }
</script>
