<template>
    <tr>
        <th v-for="index in n" :key="index">
                {{ index }}
        </th>
    </tr>
</template>

<script>
export default {
    props: [
        "n"
    ]
}
</script>

<style scoped>

</style>