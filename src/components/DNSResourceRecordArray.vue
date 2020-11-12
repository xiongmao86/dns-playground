<template>
    <div>
        <h2>{{name}}({{records.length}})</h2>
        <DNSResourceRecord v-for="(record, index) in records"
            v-bind="record"
            v-bind:key="index" />
    </div>
</template>

<script>
import DNSResourceRecord from "./DNSResourceRecord.vue"

export default {
    components: {
        DNSResourceRecord
    },
    props: {
        name: String,
        records: Array
    }
}
</script>

<style scoped>

</style>