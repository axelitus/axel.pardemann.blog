<template>
    <a class="flex items-center rounded p-1 bg-neutral-200 hover:bg-support-first-200 text-xs text-neutral-400 hover:text-support-first-600 mr-2 ml-0 md:mr-0 md:ml-2"
       :href="link"
       :title="title"
    >
        <svg class="inline-block h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
        <span class="inline-block ml-1 max-char-12 truncate">{{ slug }}</span>
    </a>
</template>

<script>
    export default {
        name: "PostTag",
        computed: {
            link() {
                return '/tags/' + this.slug
            },
            title() {
                return 'tag: ' + this.slug
            },
        },
        props: {
            slug: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .max-char-12 {
        max-width: 12ch;
    }
</style>
