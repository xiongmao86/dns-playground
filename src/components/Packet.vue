<template>
    <table>
        <caption>DNS Header</caption>
        <thead>
            <Ruler />
        </thead>
        <tbody>
            <tr>
                <th colspan="16">ID</th>
            </tr>
            <tr>
                <td colspan="16">{{`0x${pack.id.toString(16)}`}}</td>
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
        <tfoot>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import Ruler from './packet/Ruler.vue';

export default {
    components: {
        Ruler
    },
    data() {
        return {
            pack: this.$store.state
        }
    }
}
</script>

<style>
caption {
    font-weight: bold;
}
td {
    border: 1px solid lightsteelblue;
}
th {
    border: 1px solid lightsteelblue;
}
tfoot {
    display: none;
}
</style>