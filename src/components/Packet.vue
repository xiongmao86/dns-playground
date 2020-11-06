<template>
    <table>
        <caption>DNS Header</caption>
        <thead>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th colspan="16">ID</th>
            </tr>
            <tr>
                <td colspan="16">{{pack.id}}</td>
            </tr>
            <tr>
                <td>QR</td>
                <td colspan="4">Opcode</td>
                <td>AA</td>
                <td>TC</td>
                <td>RD</td>
                <td>RA</td>
                <td>Z</td>
                <td>AD</td>
                <td>CD</td>
                <td colspan="4">RCODE</td>
            </tr>
            <tr>
                <td colspan="16">QDCOUNT/ZOCOUNT</td>
            </tr>
            <tr>
                <td colspan="16">ANCOUNT/PRCOUNT</td>
            </tr>
            <tr>
                <td colspan="16">NSCOUNT/UPCOUNT</td>
            </tr>
            <tr>
                <td colspan="16">ARCOUNT</td>
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

export default {
    data() {
        return {
            pack: this.$store.state
        }
    }
}
</script>

<style>
td {
    border: 1px solid lightsteelblue;
}
tfoot {
    display: none;
}
</style>