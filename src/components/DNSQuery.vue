<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>{{name}}</td>
        </tr>
        <tr>
            <th>Type</th>
        </tr>
        <tr>
            <td>{{type}}</td>
        </tr>
        <tr>
            <th>Class</th>
        </tr>
        <tr>
            <td>{{klass}}</td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        name: String,
        type: String,
        klass: String
    }
}
</script>

<style>

</style>