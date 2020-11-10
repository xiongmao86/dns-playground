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
        <tr>
            <th>Time to live</th>
        </tr>
        <tr>
            <td>{{time_to_live}}</td>
        </tr>
        <tr>
            <th>RDLength</th>
        </tr>
        <tr>
            <td>{{data_length}}</td>
        </tr>
        <tr>
            <th>
                RData
            </th>
        </tr>
        <tr>
            <!-- TODO -->
            <td>
                Placeholder
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        name: String,
        type: String,
        klass: String,
        time_to_live: Number,
        data_length: Number,
        // TODO
        placeholder: String
    }
}
</script>

<style>

</style>