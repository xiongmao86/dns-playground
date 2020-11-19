<template>
    <div>
        <h2>DNS Header</h2>
        <table>
            <thead>
                <Ruler :n="16" />
            </thead>
            <tbody>
                <tr>
                    <th colspan="16">ID</th>
                </tr>
                <tr>
                    <td colspan="16">{{id}}</td>
                </tr>
                <tr>
                    <th>QR</th>
                    <th colspan="4">Opcode</th>
                    <th>AA</th>
                    <th>TC</th>
                    <th>RD</th>
                    <th>RA</th>
                    <th>Z</th>
                    <th>AD</th>
                    <th>CD</th>
                    <th colspan="4">RCODE</th>
                </tr>
                <tr>
                    <td>{{ flags.response }}</td>
                    <td colspan="4">{{ flags.opcode }}</td>
                    <td>{{ flags.authoritative }}</td>
                    <td>{{ flags.truncated }}</td>
                    <td>{{ flags.recursion_desired }}</td>
                    <td>{{ flags.recursion_available }}</td>
                    <td>{{ flags.z }}</td>
                    <td>{{ flags.authentic_data }}</td>
                    <td>{{ flags.checking_disable }}</td>
                    <td colspan="4">{{ flags.error_code }}</td>
                </tr>
                <tr>
                    <th colspan="16">QDCOUNT/ZOCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ query_count }}</td>
                </tr>
                <tr>
                    <th colspan="16">ANCOUNT/PRCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ answer_count }}</td>
                </tr>
                <tr>
                    <th colspan="16">NSCOUNT/UPCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ authority_count }}</td>
                </tr>
                <tr>
                    <th colspan="16">ARCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ additional_information_count }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Ruler from './Ruler.vue';

export default {
    components: {
        Ruler
    },
    props: {
        pack: Object
    },
    data () {
        return {
            id: this.$store.getters.id,
            flags: this.$store.getters.flags,
            query_count: this.$store.getters.query_count,
            answer_count: this.$store.getters.answer_count,
            authority_count: this.$store.getters.authority_count,
            additional_information_count: this.$store.getters.additional_information_count
        };
    }
}
</script>

<style>

</style>