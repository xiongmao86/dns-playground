<template>
    <tr>
        <th v-for="index in this.range()" 
            :key="index">
                {{ index }}
        </th>
    </tr>
</template>

<script>
export default {
    props: [
        "n"
    ],
    methods: {
        range() {
            return Array.from({ length: this.n }, (v, k) => k + 1)
        }
    }
}
</script>

<style scoped>

</style>