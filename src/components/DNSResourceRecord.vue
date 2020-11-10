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
                {{rdata_name()}}
            </th>
        </tr>
        <tr>
            <td>
                {{rdata_interpret()}}
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
        address: String,
        nameserver: String,
        CNAME: String
    },
    methods: {
        rdata_name() {
            if (this.type === "A") {
                return "Address";
            } else if (this.type === "NS") {
                return "Nameserver";
            } else if (this.type === "MX") {
                return "Mail Exchange";
            } else if (this.type === "CNAME") {
                return "Canonical Name";
            } else {
                return "Unknown";
            }
        },
        rdata_interpret() {
            if (this.type === "A") {
                return this.address;
            } else if (this.type === "NS") {
                return this.nameserver;
            } else if (this.type === "CNAME") {
                return this.CNAME;
            } else {
                return "Unknown";
            }
        }
    }
}
</script>

<style>

</style>