<template>
    <span>{{ prefix.trim() + ' ' }}<time :datetime="date">{{ formattedDate }}</time>{{ showRelative ? ' (' + relativeDate + ')' : '' }}</span>
</template>

<script>
    import {formatDate, relativeDate} from '@theme/scripts/utils'
    
    export default {
        name: "DateDisplay",
        computed: {
            formattedDate() {
                return formatDate(this.date)
            },
            relativeDate() {
                return relativeDate(this.date)
            },
        },
        props: {
            date: {
                type: String,
                required: true,
            },
            showRelative: {
                type: Boolean,
                default: false,
            },
            prefix: {
                type: String,
                default: '',
            }
        }
    }
</script>

<style scoped>

</style>
