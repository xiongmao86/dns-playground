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
                    <td colspan="16">{{pack.id}}</td>
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
                    <td>{{ pack.flags.response }}</td>
                    <td colspan="4">{{ pack.flags.opcode }}</td>
                    <td>{{ pack.flags.authoritative }}</td>
                    <td>{{ pack.flags.truncated }}</td>
                    <td>{{ pack.flags.recursion_desired }}</td>
                    <td>{{ pack.flags.recursion_available }}</td>
                    <td>{{ pack.flags.z }}</td>
                    <td>{{ pack.flags.authentic_data }}</td>
                    <td>{{ pack.flags.checking_disable }}</td>
                    <td colspan="4">{{ pack.flags.error_code }}</td>
                </tr>
                <tr>
                    <th colspan="16">QDCOUNT/ZOCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ pack.query_count }}</td>
                </tr>
                <tr>
                    <th colspan="16">ANCOUNT/PRCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ pack.answer_count }}</td>
                </tr>
                <tr>
                    <th colspan="16">NSCOUNT/UPCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ pack.authority_count }}</td>
                </tr>
                <tr>
                    <th colspan="16">ARCOUNT</th>
                </tr>
                <tr>
                    <td colspan="16">{{ pack.additional_information_count }}</td>
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
    }
}
</script>

<style>

</style>