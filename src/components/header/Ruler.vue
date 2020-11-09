<template>
    <tr>
        <th v-for="index in this.upper()" 
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
        upper() {
            return Array.from({ length: this.n }, (v, k) => k + 1)
        }
    }
}
</script>

<style scoped>

</style>