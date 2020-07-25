<template>
    <span>{{ prefix.trim() + ' ' }}<time :datetime="date">{{ formattedDate }}</time>{{ showRelative ? ' (' + relativeDate + ')' : '' }}</span>
</template>

<script>
    import {formatDate, relativeDate} from '@theme/scripts/utils'
    
    export default {
        name: "DateDisplay",
        computed: {
            hasDate() {
                return this.date !== false
            },
            formattedDate() {
                return this.hasDate ? formatDate(this.date) : ''
            },
            relativeDate() {
                return this.hasDate ? relativeDate(this.date) : ''
            },
        },
        props: {
            date: {
                required: true,
                validator: (value) => {
                    return value === false || typeof value === 'string'
                }
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
