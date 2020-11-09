<template>
    <tr>
        <!-- REFACTOR -->
        <!-- 把Array.from(...)写在这里才能够使用props n，在script里面不行 -->
        <!-- 如果in后面的代码过长怎么办？ -->
        <th v-for="index in Array.from({length: this.n}, (v, k) => k + 1)" 
            :key="index">
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