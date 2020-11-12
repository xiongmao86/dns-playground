<template>
    <div>
        <h2>DNS Querys({{ querys.length }})</h2>
        <DNSQuery v-for="(query, index) in querys"
            v-bind="query"
            v-bind:key="index" />
    </div>
</template>

<script>
import DNSQuery from './DNSQuery.vue'

export default {
    components: {
        DNSQuery
    },
    data () {
        return {
            querys: this.$store.state.querys
        }
    }
}
</script>