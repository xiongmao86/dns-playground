<template>
    <tr>
        <th v-for="index in range" :key="index">{{ index }}</th>
    </tr>
</template>

<script>
const range = Array.from({length: 16}, (v, k) => k + 1);

export default {
    data() {
        return { range };
    }
}
</script>

<style scoped>

</style>