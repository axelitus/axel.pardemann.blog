<template>
    <div>
        <span>{{ prefix }}</span>
        <template v-if="hasEmail">
            <a class="underline hover:text-primary-500" :href="author.url" target="_blank" rel="noopener noreferrer">
                <span class="p-name">{{ author.name }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
                    <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                    <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                </svg>
            </a>
        </template>
        <template v-else-if="hasGithub">
            <a class="underline hover:text-primary-500" :href="`https://github.com/${author.url}`" target="_blank" rel="noopener noreferrer">
                <span class="p-name">{{ author.name }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
                    <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                    <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                </svg>
            </a>
        </template>
        <template v-else>
            <span class="p-name">{{ author.name }}</span>
        </template>
    </div>
</template>

<script>
    export default {
        name: "AuthorDisplay",
        computed: {
            hasEmail() {
                return 'email' in this.author
            },
            hasGithub() {
                return 'github' in this.author
            },
        },
        props: {
            author: {
                required: true,
            },
            prefix: {
                type: String,
                required: false,
                default: "Written by"
            }
        }
    }
</script>

<style scoped>

</style>
