<template>
    <p>
        <span v-for="(byte, index) in buffer"
            v-bind:byte="byte"
            v-bind:key="index">
            {{byte}}
        </span>
    </p>
</template>

<script>
export default {
    props: {
        buffer: Array
    }
}
</script>

<style>

</style>