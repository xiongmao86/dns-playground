<template>
    <div>
        <div>
            <table>
                <thead>
                    <Ruler :n="16" />
                </thead>
                <tbody>
                    <tr>
                        <th colspan="16">ID</th>
                    </tr>
                    <tr>
                        <td colspan="16">
                            <input type="text" v-model.number="packet.id" />
                        </td>
                    </tr>
                    <tr>
                        <th colspan="16">Flags</th>
                    </tr>
                    <tr>
                        <th>qr</th>
                        <th colspan="4">opcode</th>
                        <th>aa</th>
                        <th>tc</th>
                        <th>rd</th>
                        <th>ra</th>
                        <th>z</th>
                        <th>ad</th>
                        <th>cd</th>
                        <th colspan="4">rcode</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" v-model="packet.qr" true-value=1 false-value=0 />
                        </td>
                        <td colspan="4">
                            <select id="opcode" v-model="packet.opcode">
                                <option value=0>QUERY</option>
                                <option value=1>IQUERY</option>
                                <option value=2>STATUS</option>
                            </select>
                        </td>
                        <td>
                            <input type="checkbox" v-model="packet.aa" true-value=1 false-value=0 />
                        </td>
                        <td>
                            <input type="checkbox" v-model="packet.tc" true-value=1 false-value=0 />
                        </td>
                        <td>
                            <input type="checkbox" v-model="packet.rd" true-value=1 false-value=0 />
                        </td>
                        <td>
                            <input type="checkbox" v-model="packet.ra" true-value=1 false-value=0 />
                        </td>
                        <td>
                            <input type="checkbox" v-model="packet.z" true-value=1 false-value=0 />
                        </td>
                        <td>
                            <input type="checkbox" v-model="packet.ad" true-value=1 false-value=0 />
                        </td>
                        <td>
                            <input type="checkbox" v-model="packet.cd" true-value=1 false-value=0 />
                        </td>
                        <td colspan="4">
                            <select id="rcode" v-model="packet.rcode">
                                <option value=0>No error</option>
                                <option value=1>Format error</option>
                                <option value=2>Server failure</option>
                                <option value=4>Not implemented</option>
                                <option value=5>Refused</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="16">qdcount</th>
                    </tr>
                    <tr>
                        <td colspan="16"><input type="text" v-model.number="packet.qdcount" /></td>
                    </tr>
                    <tr>
                        <th colspan="16">ancount</th>
                    </tr>
                    <tr>
                        <td colspan="16"><input type="text" v-model.number="packet.ancount" /></td>
                    </tr>
                    <tr>
                        <th colspan="16">nscount</th>
                    </tr>
                    <tr>
                        <td colspan="16"><input type="text" v-model.number="packet.nscount" /></td>
                    </tr>
                    <tr>
                        <th colspan="16">arcount</th>
                    </tr>
                    <tr>
                        <td colspan="16"><input type="text" v-model.number="packet.arcount" /></td>
                    </tr>
                    <tr>
                        <th colspan="16">qname</th>
                    </tr>
                    <tr>
                        <td colspan="16"><input type="text" v-model.trim="packet.qname" /></td>
                    </tr>
                    <tr>
                        <th colspan="16">qtype</th>
                    </tr>
                    <tr>
                        <td colspan="16"><input type="text" v-model.number="packet.qtype" /></td>
                    </tr>
                    <tr>
                        <th colspan="16">qclass</th>
                    </tr>
                    <tr>
                        <td colspan="16"><input type="text" v-model.number="packet.qclass" /></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <input type="text" v-model="server_ip" />
                <button @click="sendPacket">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
import Ruler from './Ruler.vue';

export default {
    name: 'Send',
    components: {
        Ruler
    },
    data: function() {
        return {
            server_ip: "192.168.1.1",
            packet: {
                id: 0,
                opcode: 0,
                qr: 0,
                aa: 0,
                tc: 0,
                rd: 0,
                ra: 0,
                z: 0,
                ad: 0,
                cd: 0,
                rcode: 0,
                qdcount: 1,
                ancount: 0,
                nscount: 0,
                arcount: 0,
                qname: 'www.baidu.com',
                qtype: 1,
                qclass: 1,
            },
        };
    },
    methods: {
        sendPacket: function() {
            let data = { packet: this.packet, ip: this.server_ip };

            this.$store.dispatch("sendPacket", data);
        }
    }
}
</script>

<style>

</style>